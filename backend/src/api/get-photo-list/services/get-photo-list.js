'use strict';

/**
 * get-photo-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-photo-list.get-photo-list');
