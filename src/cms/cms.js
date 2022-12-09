import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import TeamPagePreview from './preview-templates/TeamPagePreview.js'
import PartnersPagePreview from './preview-templates/PartnersPagePreview.js'
import OurValuesPagePreview from './preview-templates/OurValuesPagePreview.js'
import PrivacyPagePreview from './preview-templates/PrivacyPagePreview.js'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('team', TeamPagePreview)
CMS.registerPreviewTemplate('partners', PartnersPagePreview)
CMS.registerPreviewTemplate('our-values', OurValuesPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('privacy', PrivacyPagePreview)
