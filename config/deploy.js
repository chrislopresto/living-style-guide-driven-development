/* eslint-env node */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    s3: {},
    pipeline: {}
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';

    // Standardize revision key for all development deploys
    ENV.pipeline.disabled = {
      allExcept: ['build']
    };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV['s3'] = {
      accessKeyId: process.env.LIVING_STYLE_GUIDE_DRIVEN_DEVELOPMENT_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.LIVING_STYLE_GUIDE_DRIVEN_DEVELOPMENT_AWS_SECRET_ACCESS_KEY,
      bucket: 'living-style-guide-driven-development-assets',
      region: process.env.LIVING_STYLE_GUIDE_DRIVEN_DEVELOPMENT_AWS_REGION
    };

    ENV['s3-index'] = {
      accessKeyId: process.env.LIVING_STYLE_GUIDE_DRIVEN_DEVELOPMENT_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.LIVING_STYLE_GUIDE_DRIVEN_DEVELOPMENT_AWS_SECRET_ACCESS_KEY,
      bucket: 'living-style-guide-driven-development-index',
      region: process.env.LIVING_STYLE_GUIDE_DRIVEN_DEVELOPMENT_AWS_REGION
    };
  }

  return ENV;
};
