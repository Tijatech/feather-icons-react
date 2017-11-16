import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeatherIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { icon, size, className, ...otherProps } = this.props;

    return (
      <svg width={size}
           height={size}
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className={`feather feather-${icon} ${className}`}
           {...otherProps}>
        {this._renderInner(icon)}
      </svg>
    );
  }

  _renderInner(icon) {
    /* this is just a bunch of if statements to return the innards of the svg
    *  based on the type of icon it is.
    *  yes it's ok to not use our width and height variables here.
    *  the sizes are relative based on the viewBox attribute.
    *  our width and height variables will scale the SVG accordingly.
    *  <g> is just a wrapper it does nothing except let me use valid JSX markup
    *  these are all based on generated icons.json from feathericons lib 
    */
    if (icon === 'activity') {
      return (
        <g>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </g>
      );
    }
    if (icon === 'airplay') {
      return (
        <g>
          <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
          <polygon points="12 15 17 21 7 21 12 15"></polygon>
        </g>
      );
    }
    if (icon === 'alert-circle') {
      return (
        <g>
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>
        </g>
      );
    }
    if (icon === 'alert-octagon') {
      return (
        <g>
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>
        </g>
      );
    }
    if (icon === 'alert-triangle') {
      return (
        <g>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>
        </g>
      );
    }
    if (icon === 'align-center') {
      return (
        <g>
          <line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>
        </g>
      );
    }
    if (icon === 'align-justify') {
      return (
        <g>
          <line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>
        </g>
      );
    }
    if (icon === 'align-left') {
      return (
        <g>
          <line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>
        </g>
      );
    }
    if (icon === 'align-right') {
      return (
        <g>
          <line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>
        </g>
      );
    }
    if (icon === 'anchor') {
      return (
        <g>
          <circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
        </g>
      );
    }
    if (icon === 'aperture') {
      return (
        <g>
          <circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
        </g>
      );
    }
    if (icon === 'arrow-down-left') {
      return (
        <g>
          <line x1="18" y1="6" x2="6" y2="18"></line><polyline points="15 18 6 18 6 9"></polyline>
        </g>
      );
    }
    if (icon === 'arrow-down-right') {
      return (
        <g>
          <line x1="6" y1="6" x2="18" y2="18"></line><polyline points="9 18 18 18 18 9"></polyline>
        </g>
      );
    }
    if (icon === 'arrow-down') {
      return (
        <g>
          <line x1="12" y1="4" x2="12" y2="20"></line><polyline points="18 14 12 20 6 14"></polyline>
        </g>
      );
    }
    if (icon === 'arrow-left') {
      return (
        <g>
          <line x1="20" y1="12" x2="4" y2="12"></line><polyline points="10 18 4 12 10 6"></polyline>
        </g>
      );
    }
    if (icon === 'arrow-right') {
      return (
        <g>
          <line x1="4" y1="12" x2="20" y2="12"></line><polyline points="14 6 20 12 14 18"></polyline>
        </g>
      );
    }
    if (icon === 'arrow-up-left') {
      return (
        <g>
          <line x1="18" y1="18" x2="6" y2="6"></line><polyline points="15 6 6 6 6 15"></polyline>
        </g>
      );
    }
    if (icon === 'arrow-up-right') {
      return (
        <g>
          <line x1="6" y1="18" x2="18" y2="6"></line><polyline points="9 6 18 6 18 15"></polyline>
        </g>
      );
    }
    if (icon === 'arrow-up') {
      return (
        <g>
          <line x1="12" y1="20" x2="12" y2="4"></line><polyline points="6 10 12 4 18 10"></polyline>
        </g>
      );
    }
    if (icon === 'at-sign') {
      return (
        <g>
          <circle cx="12" cy="12" r="4"></circle><path d="M16 12v1a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
        </g>
      );
    }
    if (icon === 'award') {
      return (
        <g>
          <circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </g>
      );
    }
    if (icon === 'bar-chart-2') {
      return (
        <g>
          <rect x="10" y="3" width="4" height="18"></rect><rect x="18" y="8" width="4" height="13"></rect><rect x="2" y="13" width="4" height="8"></rect>
        </g>
      );
    }
    if (icon === 'bar-chart') {
      return (
        <g>
          <rect x="18" y="3" width="4" height="18"></rect><rect x="10" y="8" width="4" height="13"></rect><rect x="2" y="13" width="4" height="8"></rect>
        </g>
      );
    }
    if (icon === 'battery-charging') {
      return (
        <g>
          <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>
        </g>
      );
    }
    if (icon === 'battery') {
      return (
        <g>
          <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>
        </g>
      );
    }
    if (icon === 'bell-off') {
      return (
        <g>
          <path d="M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0"></path><line x1="1" y1="1" x2="23" y2="23"></line>
        </g>
      );
    }
    if (icon === 'bell') {
      return (
        <g>
          <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
        </g>
      );
    }
    if (icon === 'bluetooth') {
      return (
        <g>
          <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>
        </g>
      );
    }
    if (icon === 'bold') {
      return (
        <g>
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
        </g>
      );
    }
    if (icon === 'book') {
      return (
        <g>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </g>
      );
    }
    if (icon === 'bookmark') {
      return (
        <g>
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </g>
      );
    }
    if (icon === 'box') {
      return (
        <g>
          <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line>
        </g>
      );
    }
    if (icon === 'briefcase') {
      return (
        <g>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </g>
      );
    }
    if (icon === 'calendar') {
      return (
        <g>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
        </g>
      );
    }
    if (icon === 'camera-off') {
      return (
        <g>
          <line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>
        </g>
      );
    }
    if (icon === 'camera') {
      return (
        <g>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>
        </g>
      );
    }
    if (icon === 'cast') {
      return (
        <g>
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line>
        </g>
      );
    }
    if (icon === 'check-circle') {
      return (
        <g>
          <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path><polyline points="23 3 12 14 9 11"></polyline>
        </g>
      );
    }
    if (icon === 'check-square') {
      return (
        <g>
          <polyline points="9 11 12 14 23 3"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </g>
      );
    }
    if (icon === 'check') {
      return (
        <g>
          <polyline points="20 6 9 17 4 12"></polyline>
        </g>
      );
    }
    if (icon === 'chevron-down') {
      return (
        <g> <polyline points="6 9 12 15 18 9"></polyline>
        </g>
      );
    }
    if (icon === 'chevron-left') {
      return (
        <g> <polyline points="15 18 9 12 15 6"></polyline>
        </g>
      );
    }
    if (icon === 'chevron-right') {
      return (
        <g> <polyline points="9 18 15 12 9 6"></polyline>
        </g>
      );
    }
    if (icon === 'chevron-up') {
      return (
        <g> <polyline points="18 15 12 9 6 15"></polyline>
        </g>
      );
    }
    if (icon === 'chevrons-down') {
      return (
        <g> <polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>
        </g>
      );
    }
    if (icon === 'chevrons-left') {
      return (
        <g> <polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>
        </g>
      );
    }
    if (icon === 'chevrons-right') {
      return (
        <g> <polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>
        </g>
      );
    }
    if (icon === 'chevrons-up') {
      return (
        <g> <polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>
        </g>
      );
    }
    if (icon === 'chrome') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
        </g>
      );
    }
    if (icon === 'circle') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle>
        </g>
      );
    }
    if (icon === 'clipboard') {
      return (
        <g> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </g>
      );
    }
    if (icon === 'clock') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline>
        </g>
      );
    }
    if (icon === 'cloud-drizzle') {
      return (
        <g> <line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
        </g>
      );
    }
    if (icon === 'cloud-lightning') {
      return (
        <g> <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>
        </g>
      );
    }
    if (icon === 'cloud-off') {
      return (
        <g> <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>
        </g>
      );
    }
    if (icon === 'cloud-rain') {
      return (
        <g> <line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
        </g>
      );
    }
    if (icon === 'cloud-snow') {
      return (
        <g> <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line>
        </g>
      );
    }
    if (icon === 'cloud') {
      return (
        <g> <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </g>
      );
    }
    if (icon === 'codepen') {
      return (
        <g> <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>
        </g>
      );
    }
    if (icon === 'command') {
      return (
        <g> <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        </g>
      );
    }
    if (icon === 'compass') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </g>
      );
    }
    if (icon === 'copy') {
      return (
        <g> <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </g>
      );
    }
    if (icon === 'corner-down-left') {
      return (
        <g> <polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
        </g>
      );
    }
    if (icon === 'corner-down-right') {
      return (
        <g> <polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
        </g>
      );
    }
    if (icon === 'corner-left-down') {
      return (
        <g> <polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>
        </g>
      );
    }
    if (icon === 'corner-left-up') {
      return (
        <g> <polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
        </g>
      );
    }
    if (icon === 'corner-right-down') {
      return (
        <g> <polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
        </g>
      );
    }
    if (icon === 'corner-right-up') {
      return (
        <g> <polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
        </g>
      );
    }
    if (icon === 'corner-up-left') {
      return (
        <g> <polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
        </g>
      );
    }
    if (icon === 'corner-up-right') {
      return (
        <g> <polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
        </g>
      );
    }
    if (icon === 'cpu') {
      return (
        <g> <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>
        </g>
      );
    }
    if (icon === 'credit-card') {
      return (
        <g> <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
        </g>
      );
    }
    if (icon === 'crop') {
      return (
        <g> <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
        </g>
      );
    }
    if (icon === 'crosshair') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>
        </g>
      );
    }
    if (icon === 'delete') {
      return (
        <g> <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>
        </g>
      );
    }
    if (icon === 'disc') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>
        </g>
      );
    }
    if (icon === 'download-cloud') {
      return (
        <g> <polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
        </g>
      );
    }
    if (icon === 'download') {
      return (
        <g> <path d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="2" x2="12" y2="16"></line>
        </g>
      );
    }
    if (icon === 'droplet') {
      return (
        <g> <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </g>
      );
    }
    if (icon === 'edit-2') {
      return (
        <g> <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
        </g>
      );
    }
    if (icon === 'edit-3') {
      return (
        <g> <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line>
        </g>
      );
    }
    if (icon === 'edit') {
      return (
        <g> <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
        </g>
      );
    }
    if (icon === 'external-link') {
      return (
        <g> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
        </g>
      );
    }
    if (icon === 'eye-off') {
      return (
        <g> <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>
        </g>
      );
    }
    if (icon === 'eye') {
      return (
        <g> <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
        </g>
      );
    }
    if (icon === 'facebook') {
      return (
        <g> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </g>
      );
    }
    if (icon === 'fast-forward') {
      return (
        <g> <polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>
        </g>
      );
    }
    if (icon === 'feather') {
      return (
        <g> <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17" y1="15" x2="9" y2="15"></line>
        </g>
      );
    }
    if (icon === 'file-minus') {
      return (
        <g> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>
        </g>
      );
    }
    if (icon === 'file-plus') {
      return (
        <g> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>
        </g>
      );
    }
    if (icon === 'file-text') {
      return (
        <g> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
        </g>
      );
    }
    if (icon === 'file') {
      return (
        <g> <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>
        </g>
      );
    }
    if (icon === 'film') {
      return (
        <g> <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>
        </g>
      );
    }
    if (icon === 'filter') {
      return (
        <g> <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </g>
      );
    }
    if (icon === 'flag') {
      return (
        <g> <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>
        </g>
      );
    }
    if (icon === 'folder') {
      return (
        <g> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </g>
      );
    }
    if (icon === 'github') {
      return (
        <g> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </g>
      );
    }
    if (icon === 'gitlab') {
      return (
        <g> <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
        </g>
      );
    }
    if (icon === 'globe') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </g>
      );
    }
    if (icon === 'grid') {
      return (
        <g> <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
        </g>
      );
    }
    if (icon === 'hash') {
      return (
        <g> <line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>
        </g>
      );
    }
    if (icon === 'headphones') {
      return (
        <g> <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </g>
      );
    }
    if (icon === 'heart') {
      return (
        <g> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </g>
      );
    }
    if (icon === 'help-circle') {
      return (
        <g> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="17" x2="12" y2="17"></line>
        </g>
      );
    }
    if (icon === 'home') {
      return (
        <g> <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
        </g>
      );
    }
    if (icon === 'image') {
      return (
        <g> <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>
        </g>
      );
    }
    if (icon === 'inbox') {
      return (
        <g> <polyline points="22 13 16 13 14 16 10 16 8 13 2 13"></polyline><path d="M5.47 5.19L2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5l-3.47-7.81A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.83 1.19z"></path>
        </g>
      );
    }
    if (icon === 'info') {
      return (
        <g>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
        </g>
      );
    }
    if (icon === 'instagram') {
      return (
        <g>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
        </g>
      );
    }
    if (icon === 'italic') {
      return (
        <g> <line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>
        </g>
      );
    }
    if (icon === 'layers') {
      return (
        <g> <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
        </g>
      );
    }
    if (icon === 'layout') {
      return (
        <g> <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
        </g>
      );
    }
    if (icon === 'life-buoy') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
        </g>
      );
    }
    if (icon === 'link-2') {
      return (
        <g> <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>
        </g>
      );
    }
    if (icon === 'link') {
      return (
        <g> <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </g>
      );
    }
    if (icon === 'list') {
      return (
        <g> <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>
        </g>
      );
    }
    if (icon === 'loader') {
      return (
        <g> <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </g>
      );
    }
    if (icon === 'lock') {
      return (
        <g> <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </g>
      );
    }
    if (icon === 'log-in') {
      return (
        <g> <path d="M14 22h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5"></path><polyline points="11 16 15 12 11 8"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>
        </g>
      );
    }
    if (icon === 'log-out') {
      return (
        <g> <path d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5"></path><polyline points="17 16 21 12 17 8"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
        </g>
      );
    }
    if (icon === 'mail') {
      return (
        <g> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
        </g>
      );
    }
    if (icon === 'map-pin') {
      return (
        <g> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
        </g>
      );
    }
    if (icon === 'map') {
      return (
        <g> <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>
        </g>
      );
    }
    if (icon === 'maximize-2') {
      return (
        <g> <polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>
        </g>
      );
    }
    if (icon === 'maximize') {
      return (
        <g> <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        </g>
      );
    }
    if (icon === 'menu') {
      return (
        <g> <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
        </g>
      );
    }
    if (icon === 'message-circle') {
      return (
        <g> <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </g>
      );
    }
    if (icon === 'message-square') {
      return (
        <g> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </g>
      );
    }
    if (icon === 'mic-off') {
      return (
        <g> <line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
        </g>
      );
    }
    if (icon === 'mic') {
      return (
        <g> <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
        </g>
      );
    }
    if (icon === 'minimize-2') {
      return (
        <g> <polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>
        </g>
      );
    }
    if (icon === 'minimize') {
      return (
        <g> <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
        </g>
      );
    }
    if (icon === 'minus-circle') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>
        </g>
      );
    }
    if (icon === 'minus-square') {
      return (
        <g> <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>
        </g>
      );
    }
    if (icon === 'minus') {
      return (
        <g> <line x1="5" y1="12" x2="19" y2="12"></line>
        </g>
      );
    }
    if (icon === 'monitor') {
      return (
        <g> <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
        </g>
      );
    }
    if (icon === 'moon') {
      return (
        <g> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </g>
      );
    }
    if (icon === 'more-horizontal') {
      return (
        <g> <circle cx="12" cy="12" r="2"></circle><circle cx="20" cy="12" r="2"></circle><circle cx="4" cy="12" r="2"></circle>
        </g>
      );
    }
    if (icon === 'more-vertical') {
      return (
        <g> <circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="4" r="2"></circle><circle cx="12" cy="20" r="2"></circle>
        </g>
      );
    }
    if (icon === 'move') {
      return (
        <g> <polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>
        </g>
      );
    }
    if (icon === 'music') {
      return (
        <g> <path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path><polyline points="9 17 9 5 21 3 21 15"></polyline>
        </g>
      );
    }
    if (icon === 'navigation-2') {
      return (
        <g> <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
        </g>
      );
    }
    if (icon === 'navigation') {
      return (
        <g> <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
        </g>
      );
    }
    if (icon === 'octagon') {
      return (
        <g> <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
        </g>
      );
    }
    if (icon === 'package') {
      return (
        <g> <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line>
        </g>
      );
    }
    if (icon === 'paperclip') {
      return (
        <g> <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
        </g>
      );
    }
    if (icon === 'pause-circle') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>
        </g>
      );
    }
    if (icon === 'pause') {
      return (
        <g> <rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>
        </g>
      );
    }
    if (icon === 'percent') {
      return (
        <g> <line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>
        </g>
      );
    }
    if (icon === 'phone-call') {
      return (
        <g> <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </g>
      );
    }
    if (icon === 'phone-forwarded') {
      return (
        <g> <polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </g>
      );
    }
    if (icon === 'phone-incoming') {
      return (
        <g> <polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </g>
      );
    }
    if (icon === 'phone-missed') {
      return (
        <g> <line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </g>
      );
    }
    if (icon === 'phone-off') {
      return (
        <g> <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>
        </g>
      );
    }
    if (icon === 'phone-outgoing') {
      return (
        <g> <polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </g>
      );
    }
    if (icon === 'phone') {
      return (
        <g> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </g>
      );
    }
    if (icon === 'pie-chart') {
      return (
        <g> <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </g>
      );
    }
    if (icon === 'play-circle') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
        </g>
      );
    }
    if (icon === 'play') {
      return (
        <g> <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </g>
      );
    }
    if (icon === 'plus-circle') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>
        </g>
      );
    }
    if (icon === 'plus-square') {
      return (
        <g> <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>
        </g>
      );
    }
    if (icon === 'plus') {
      return (
        <g> <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
        </g>
      );
    }
    if (icon === 'pocket') {
      return (
        <g> <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>
        </g>
      );
    }
    if (icon === 'power') {
      return (
        <g> <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>
        </g>
      );
    }
    if (icon === 'printer') {
      return (
        <g> <polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>
        </g>
      );
    }
    if (icon === 'radio') {
      return (
        <g> <circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
        </g>
      );
    }
    if (icon === 'refresh-ccw') {
      return (
        <g> <polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
        </g>
      );
    }
    if (icon === 'refresh-cw') {
      return (
        <g> <polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </g>
      );
    }
    if (icon === 'repeat') {
      return (
        <g> <polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </g>
      );
    }
    if (icon === 'rewind') {
      return (
        <g> <polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>
        </g>
      );
    }
    if (icon === 'rotate-ccw') {
      return (
        <g> <polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
        </g>
      );
    }
    if (icon === 'rotate-cw') {
      return (
        <g> <polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </g>
      );
    }
    if (icon === 'save') {
      return (
        <g> <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>
        </g>
      );
    }
    if (icon === 'scissors') {
      return (
        <g> <circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>
        </g>
      );
    }
    if (icon === 'search') {
      return (
        <g> <circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line>
        </g>
      );
    }
    if (icon === 'server') {
      return (
        <g> <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line>
        </g>
      );
    }
    if (icon === 'settings') {
      return (
        <g> <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </g>
      );
    }
    if (icon === 'share-2') {
      return (
        <g> <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </g>
      );
    }
    if (icon === 'share') {
      return (
        <g> <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
        </g>
      );
    }
    if (icon === 'shield') {
      return (
        <g> <path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"></path>
        </g>
      );
    }
    if (icon === 'shopping-cart') {
      return (
        <g> <circle cx="8" cy="21" r="2"></circle><circle cx="20" cy="21" r="2"></circle><path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1"></path>
        </g>
      );
    }
    if (icon === 'shuffle') {
      return (
        <g> <polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>
        </g>
      );
    }
    if (icon === 'sidebar') {
      return (
        <g> <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>
        </g>
      );
    }
    if (icon === 'skip-back') {
      return (
        <g> <polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>
        </g>
      );
    }
    if (icon === 'skip-forward') {
      return (
        <g> <polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>
        </g>
      );
    }
    if (icon === 'slack') {
      return (
        <g> <path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z"></path><line x1="12.57" y1="5.99" x2="16.15" y2="16.39"></line><line x1="7.85" y1="7.61" x2="11.43" y2="18.01"></line><line x1="16.39" y1="7.85" x2="5.99" y2="11.43"></line><line x1="18.01" y1="12.57" x2="7.61" y2="16.15"></line>
        </g>
      );
    }
    if (icon === 'slash') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
        </g>
      );
    }
    if (icon === 'sliders') {
      return (
        <g> <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
        </g>
      );
    }
    if (icon === 'smartphone') {
      return (
        <g> <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>
        </g>
      );
    }
    if (icon === 'speaker') {
      return (
        <g> <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>
        </g>
      );
    }
    if (icon === 'square') {
      return (
        <g> <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        </g>
      );
    }
    if (icon === 'star') {
      return (
        <g> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </g>
      );
    }
    if (icon === 'stop-circle') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>
        </g>
      );
    }
    if (icon === 'sun') {
      return (
        <g> <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </g>
      );
    }
    if (icon === 'sunrise') {
      return (
        <g> <path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>
        </g>
      );
    }
    if (icon === 'sunset') {
      return (
        <g> <path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>
        </g>
      );
    }
    if (icon === 'tablet') {
      return (
        <g> <rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>
        </g>
      );
    }
    if (icon === 'tag') {
      return (
        <g> <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line>
        </g>
      );
    }
    if (icon === 'target') {
      return (
        <g> <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
        </g>
      );
    }
    if (icon === 'thermometer') {
      return (
        <g> <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
        </g>
      );
    }
    if (icon === 'thumbs-down') {
      return (
        <g> <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
        </g>
      );
    }
    if (icon === 'thumbs-up') {
      return (
        <g> <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </g>
      );
    }
    if (icon === 'toggle-left') {
      return (
        <g> <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>
        </g>
      );
    }
    if (icon === 'toggle-right') {
      return (
        <g> <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>
        </g>
      );
    }
    if (icon === 'trash-2') {
      return (
        <g> <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
        </g>
      );
    }
    if (icon === 'trash') {
      return (
        <g> <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </g>
      );
    }
    if (icon === 'trending-down') {
      return (
        <g> <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>
        </g>
      );
    }
    if (icon === 'trending-up') {
      return (
        <g> <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
        </g>
      );
    }
    if (icon === 'triangle') {
      return (
        <g> <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        </g>
      );
    }
    if (icon === 'tv') {
      return (
        <g> <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>
        </g>
      );
    }
    if (icon === 'twitter') {
      return (
        <g> <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </g>
      );
    }
    if (icon === 'type') {
      return (
        <g> <polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>
        </g>
      );
    }
    if (icon === 'umbrella') {
      return (
        <g> <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
        </g>
      );
    }
    if (icon === 'underline') {
      return (
        <g> <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>
        </g>
      );
    }
    if (icon === 'unlock') {
      return (
        <g> <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
        </g>
      );
    }
    if (icon === 'upload-cloud') {
      return (
        <g> <polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>
        </g>
      );
    }
    if (icon === 'upload') {
      return (
        <g> <path d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="16"></line>
        </g>
      );
    }
    if (icon === 'user-check') {
      return (
        <g> <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>
        </g>
      );
    }
    if (icon === 'user-minus') {
      return (
        <g> <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>
        </g>
      );
    }
    if (icon === 'user-plus') {
      return (
        <g> <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>
        </g>
      );
    }
    if (icon === 'user-x') {
      return (
        <g> <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>
        </g>
      );
    }
    if (icon === 'user') {
      return (
        <g> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
        </g>
      );
    }
    if (icon === 'users') {
      return (
        <g> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </g>
      );
    }
    if (icon === 'video-off') {
      return (
        <g> <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>
        </g>
      );
    }
    if (icon === 'video') {
      return (
        <g> <polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </g>
      );
    }
    if (icon === 'voicemail') {
      return (
        <g> <circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>
        </g>
      );
    }
    if (icon === 'volume-1') {
      return (
        <g> <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </g>
      );
    }
    if (icon === 'volume-2') {
      return (
        <g> <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </g>
      );
    }
    if (icon === 'volume-x') {
      return (
        <g> <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>
        </g>
      );
    }
    if (icon === 'volume') {
      return (
        <g> <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        </g>
      );
    }
    if (icon === 'watch') {
      return (
        <g> <circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
        </g>
      );
    }
    if (icon === 'wifi-off') {
      return (
        <g> <line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>
        </g>
      );
    }
    if (icon === 'wifi') {
      return (
        <g>
          <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
          <line x1="12" y1="20" x2="12" y2="20"></line>
        </g>
      );
    }
    if (icon === 'wind') {
      return (
        <g>
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
        </g>
      );
    }
    if (icon === 'x-circle') {
      return (
        <g>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </g>
      );
    }
    if (icon === 'x-square') {
      return (
        <g>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="9" x2="15" y2="15"></line>
          <line x1="15" y1="9" x2="9" y2="15"></line>
        </g>
      );
    }
    if (icon === 'x') {
      return (
        <g>
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </g>
      );
    }
    if (icon === 'zap') {
      return (
        <g>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </g>
      );
    }
    if (icon === 'zoom-in') {
      return (
        <g>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </g>
      );
    }
    if (icon === 'zoom-out') {
      return (
        <g>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </g>
      );
    }
    return;
  }
}

FeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

FeatherIcon.defaultProps = {
  color: 'currentColor',
  size: 24
}

export default FeatherIcon;
