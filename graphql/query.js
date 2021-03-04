/**
 * Query
 */


import {
  gql
} from 'graphql-request'

export default gql`{

  query pf {

    items {

      home {
        identity_image {
          id {
            id
          }
        }
        identity_image_theme_alternate {
          id {
            id
          }
        }
        hero_image_theme_alternate {
          id {
            id
          }
        }
        hero_image {
          id {
            id
          }
        }
        hero_image_transitioned_theme_alternate {
          id {
            id
          }
        }
        hero_image_transitioned {
          id {
            id
          }
        }
        id
        identity_text_background {
          id {
            id
          }
        }
        identity_text_background_theme_alternate {
          id {
            id
          }
        }
        cta_wave_illustration {
          id {
            id
          }
        }
        cta_wave_illustration_hover {
          id {
            id
          }
        }
        heading
        hero_text
        skills_heading
        skills_text
        work_heading
        work_text
        info_text_start
        info_text_end
        cta_button_text
        cta_text
        availability_text
        scroll_icon {
          name
          icon {
            id {
              id
            }
          }
        }
      }

      portfolio_items {
        id
        featured_image_1 {
          id
        }
        featured_image_2 {
          id
        }
        short_description
        description
        tags
      }

      portfolio_items_directus_files_2 {
        portfolio_items_id {
          id
        }
        directus_files_id {
          id
          filename_download
        }
      }

      site {
        title
        branding_dark{
          id
        }
        branding_light {
          id
        }
        footer_text_upper
        footer_text_lower
        theme_switch_icon {
          icon {
            id
          }
        }
        back_arrow_icon {
          icon {
            id
          }
        }
        pattern_main {
          id
        }
        pattern_main_theme_alternate {
          id
        }
        pattern_alternate {
          id
        }
        pattern_alternate_theme_alternate {
          id
        }
        pattern_subtle {
          id
        }
        pattern_subtle_theme_alternate {
          id
        }
        pattern_subtle_alternate {
          id
        }
        pattern_subtle_alternate_theme_alternate {
          id
        }
      }

      icons {
        name
        icon {
          id
        }
      }

      social_links {
        url
        title
        icon {
          icon {
            id
          }
        }
      }

    }
  }

}`
