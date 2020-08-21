// TODO: column presets from json
module.exports = {
  default: {
    name: 'default',
    groups: ['main'],
    columns: [
      'url',
      'h1',
      'request_time',
      'status',
      'dom_size',
      'html_size',
      'is_canonical',
      'canonical_count',
      'h1_count',
      'h2_count',
      'h3_count',
      'h4_count',
      'images',
      'images_without_alt',
      'images_alt_empty',
      'images_outer',
      'links',
      'links_inner',
      'links_outer',
      'text_ratio_percent',
      /* 'lighthouse_scores_performance',
      'lighthouse_scores_pwa',
      'lighthouse_scores_accessibility',
      'lighthouse_scores_best-practices',
      'lighthouse_scores_seo',
      'lighthouse_first-contentful-paint',
      'lighthouse_speed-index',
      'lighthouse_largest-contentful-paint',
      'lighthouse_interactive',
      'lighthouse_total-blocking-time',
      'lighthouse_cumulative-layout-shift', */
    ]
  },
  lighthouse: {
    name: 'lighthouse',
    groups: ['lighthouse'],
    columns: [
      'url',
      'lighthouse_scores_performance',
      'lighthouse_scores_pwa',
      'lighthouse_scores_accessibility',
      'lighthouse_scores_best-practices',
      'lighthouse_scores_seo',
      'lighthouse_first-contentful-paint',
      'lighthouse_speed-index',
      'lighthouse_largest-contentful-paint',
      'lighthouse_interactive',
      'lighthouse_total-blocking-time',
      'lighthouse_cumulative-layout-shift',
    ]
  },
  opengraph: {
    name: 'opengraph',
    groups: ['seo'],
    columns: [
      'url',
      'og_image',
      'og_title',
      'schema_types',
    ]
  },
  mixed_content: {
    name: 'mixed_content',
    groups: ['info', 'seo'],
    columns: [
      'url',
      'mixed_content_url',
    ]
  },
  metatags: {
    name: 'metatags',
    groups: ['info'],
    columns: [
      'url',
      'title',
      'description',
      'keywords',
      'h1',
      'canonical',
      'og_image',
      'og_title',
      'schema_types',
    ]
  },
};
