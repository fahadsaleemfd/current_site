/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

export default {
  mediabuyingContainer: {
    position: `relative`,
    pt: [6, 7],
    "::before": {
      position: `absolute`,
      content: `" "`,
      width: `full`,
      height: `80%`,
      top: 0,
      right: 0,
      zIndex: -1,
      bg: `white`,
    },
  },
};
