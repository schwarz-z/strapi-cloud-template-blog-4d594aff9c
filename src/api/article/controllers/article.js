'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::article.article');

module.exports = {
    async find(ctx) {
      // Finde alle Artikel
      const entries = await strapi.services.article.find();
  
      // Entferne unerwünschte Felder
      const sanitizedEntries = entries.map(entry => {
        // Entferne die Felder aus jedem Artikel
        delete entry.createdAt;
        delete entry.updatedAt;
        delete entry.publishedAt;
  
        return entry;
      });
  
      // Gebe die bereinigten Artikel zurück
      return sanitizedEntries;
    }
  };
  
