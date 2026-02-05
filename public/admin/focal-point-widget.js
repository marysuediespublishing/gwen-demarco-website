/**
 * Focal Point Picker Widget for Decap CMS
 * Allows users to visually select a focal point on an image for thumbnail cropping
 */

// Create the control component (the editor interface)
const FocalPointControl = createClass({
  getInitialState() {
    return {
      imageUrl: null,
    };
  },

  componentDidMount() {
    this.findImageUrl();
  },

  componentDidUpdate(prevProps) {
    // Check if the image field specifically changed (not just the entry reference)
    const prevImage = this.getImageFromEntry(prevProps.entry);
    const currentImage = this.getImageFromEntry(this.props.entry);

    if (prevImage !== currentImage) {
      this.setState({ imageUrl: currentImage || null });
    }
  },

  getImageFromEntry(entry) {
    // Safely extract the image field value from an entry
    if (!entry) return null;

    // Try getIn for immutable.js data structures (Decap CMS standard)
    if (typeof entry.getIn === 'function') {
      return entry.getIn(['data', 'image']) || null;
    }

    // Fallback for plain objects
    const data = entry.get ? entry.get('data') : entry.data;
    if (data) {
      return data.get ? data.get('image') : data.image;
    }

    return null;
  },

  findImageUrl() {
    // Try to get the image URL from the entry's data
    const image = this.getImageFromEntry(this.props.entry);
    if (image !== this.state.imageUrl) {
      this.setState({ imageUrl: image || null });
    }
  },

  parseFocalPoint() {
    const value = this.props.value || '50,50';
    const parts = value.split(',');
    return {
      x: parseInt(parts[0], 10) || 50,
      y: parseInt(parts[1], 10) || 50,
    };
  },

  handleImageClick(e) {
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    // Clamp values between 0 and 100
    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    this.props.onChange(`${clampedX},${clampedY}`);
  },

  handleInputChange(axis, e) {
    const focal = this.parseFocalPoint();
    const newValue = parseInt(e.target.value, 10) || 50;
    const clamped = Math.max(0, Math.min(100, newValue));

    if (axis === 'x') {
      this.props.onChange(`${clamped},${focal.y}`);
    } else {
      this.props.onChange(`${focal.x},${clamped}`);
    }
  },

  render() {
    const focal = this.parseFocalPoint();
    const imageUrl = this.state.imageUrl;

    // Styles
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px',
      backgroundColor: '#1a1a2e',
      borderRadius: '8px',
      border: '1px solid #3d3d5c',
    };

    const imageContainerStyle = {
      position: 'relative',
      width: '100%',
      maxWidth: '400px',
      cursor: 'crosshair',
      borderRadius: '4px',
      overflow: 'hidden',
      border: '2px solid #6b46c1',
    };

    const imageStyle = {
      width: '100%',
      height: 'auto',
      display: 'block',
    };

    const crosshairStyle = {
      position: 'absolute',
      width: '20px',
      height: '20px',
      border: '2px solid #ff6b35',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      left: `${focal.x}%`,
      top: `${focal.y}%`,
      boxShadow: '0 0 0 2px rgba(0,0,0,0.5), 0 0 10px rgba(255,107,53,0.5)',
    };

    const crosshairCenterStyle = {
      position: 'absolute',
      width: '6px',
      height: '6px',
      backgroundColor: '#ff6b35',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      left: `${focal.x}%`,
      top: `${focal.y}%`,
    };

    const previewContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    };

    const previewLabelStyle = {
      color: '#e2e8f0',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    };

    const previewWrapperStyle = {
      width: '200px',
      aspectRatio: '4/3',
      overflow: 'hidden',
      borderRadius: '4px',
      border: '1px solid #3d3d5c',
      backgroundColor: '#0a0a0f',
    };

    const previewImageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: `${focal.x}% ${focal.y}%`,
    };

    const inputRowStyle = {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
    };

    const inputGroupStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    };

    const labelStyle = {
      color: '#94a3b8',
      fontSize: '14px',
      fontWeight: '500',
    };

    const inputStyle = {
      width: '70px',
      padding: '6px 10px',
      backgroundColor: '#0a0a0f',
      border: '1px solid #3d3d5c',
      borderRadius: '4px',
      color: '#e2e8f0',
      fontSize: '14px',
    };

    const hintStyle = {
      color: '#94a3b8',
      fontSize: '12px',
      marginTop: '4px',
    };

    const noImageStyle = {
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#0a0a0f',
      borderRadius: '8px',
      border: '2px dashed #3d3d5c',
    };

    const noImageTextStyle = {
      color: '#94a3b8',
      fontSize: '14px',
    };

    if (!imageUrl) {
      return h('div', { style: containerStyle },
        h('div', { style: noImageStyle },
          h('p', { style: noImageTextStyle },
            'Upload an image first to set the focal point'
          )
        ),
        h('div', { style: inputRowStyle },
          h('div', { style: inputGroupStyle },
            h('label', { style: labelStyle }, 'X:'),
            h('input', {
              type: 'number',
              min: 0,
              max: 100,
              value: focal.x,
              onChange: (e) => this.handleInputChange('x', e),
              style: inputStyle,
            }),
            h('span', { style: labelStyle }, '%')
          ),
          h('div', { style: inputGroupStyle },
            h('label', { style: labelStyle }, 'Y:'),
            h('input', {
              type: 'number',
              min: 0,
              max: 100,
              value: focal.y,
              onChange: (e) => this.handleInputChange('y', e),
              style: inputStyle,
            }),
            h('span', { style: labelStyle }, '%')
          )
        ),
        h('p', { style: hintStyle },
          'X: 0 = left, 50 = center, 100 = right | Y: 0 = top, 50 = center, 100 = bottom'
        )
      );
    }

    return h('div', { style: containerStyle },
      h('div', { style: { display: 'flex', gap: '24px', flexWrap: 'wrap' } },
        // Main image with focal point picker
        h('div', { style: { flex: '1 1 300px' } },
          h('div', { style: previewLabelStyle }, 'Click to set focal point'),
          h('div', {
            style: imageContainerStyle,
            onClick: this.handleImageClick,
          },
            h('img', {
              src: imageUrl,
              alt: 'Artwork',
              style: imageStyle,
            }),
            h('div', { style: crosshairStyle }),
            h('div', { style: crosshairCenterStyle })
          )
        ),
        // Preview thumbnail
        h('div', { style: previewContainerStyle },
          h('div', { style: previewLabelStyle }, 'Thumbnail Preview (4:3)'),
          h('div', { style: previewWrapperStyle },
            h('img', {
              src: imageUrl,
              alt: 'Thumbnail preview',
              style: previewImageStyle,
            })
          )
        )
      ),
      // Manual input fields
      h('div', { style: inputRowStyle },
        h('div', { style: inputGroupStyle },
          h('label', { style: labelStyle }, 'X:'),
          h('input', {
            type: 'number',
            min: 0,
            max: 100,
            value: focal.x,
            onChange: (e) => this.handleInputChange('x', e),
            style: inputStyle,
          }),
          h('span', { style: labelStyle }, '%')
        ),
        h('div', { style: inputGroupStyle },
          h('label', { style: labelStyle }, 'Y:'),
          h('input', {
            type: 'number',
            min: 0,
            max: 100,
            value: focal.y,
            onChange: (e) => this.handleInputChange('y', e),
            style: inputStyle,
          }),
          h('span', { style: labelStyle }, '%')
        )
      ),
      h('p', { style: hintStyle },
        'Click on the image to set the focal point, or enter values manually. The preview shows how the thumbnail will be cropped.'
      )
    );
  },
});

// Create the preview component (for the preview pane)
const FocalPointPreview = createClass({
  render() {
    const value = this.props.value || '50,50';
    return h('div', {
      style: {
        color: '#6b46c1',
        fontFamily: 'monospace',
        padding: '4px 8px',
        backgroundColor: 'rgba(107, 70, 193, 0.1)',
        borderRadius: '4px',
        display: 'inline-block',
      }
    }, `Focal Point: ${value}`);
  },
});
