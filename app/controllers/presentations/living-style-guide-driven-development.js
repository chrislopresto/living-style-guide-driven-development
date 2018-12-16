import Ember from 'ember';
import RevealPresentation from 'ember-reveal-js/controllers/reveal-presentation';

const { computed, inject } = Ember;

const monegraphPalette = {
  "MonegraphPalette": {
    "white": {
      "name": "white",
      "base": "#ffffff"
    },
    "light-gray": {
      "name": "light-gray",
      "base": "#dddddd"
    },
    "medium-gray": {
      "name": "medium-gray",
      "base": "#888888"
    },
    "dark-gray": {
      "name": "dark-gray",
      "base": "#515151"
    },
    "black": {
      "name": "black",
      "base": "#000000"
    },
    "magenta": {
      "name": "magenta",
      "base": "#b0008e"
    },
    "violet": {
      "name": "violet",
      "base": "#615e9b"
    },
    "blue": {
      "name": "blue",
      "base": "#007dba"
    },
    "teal": {
      "name": "teal",
      "base": "#008578"
    },
    "green": {
      "name": "green",
      "base": "#64a70b"
    },
    "lime": {
      "name": "lime",
      "base": "#b5bd00"
    }
  }
};

export default RevealPresentation.extend({
  emberFreestyle: inject.service(),
  showLabels: computed.alias('emberFreestyle.showLabels'),
  showNotes: computed.alias('emberFreestyle.showNotes'),
  showCode: computed.alias('emberFreestyle.showCode'),

  queryParams: ['f', 's', 'ss', 'm'],

  f: computed.alias('emberFreestyle.focus'),
  m: computed.alias('emberFreestyle.showMenu'),

  s: computed.alias('emberFreestyle.section'),
  ss: computed.alias('emberFreestyle.subsection'),

  // monegraphPalette: computed.alias('emberFreestyle.monegraph-palette.MonegraphPalette'),
  monegraphPaletteColors: function() {
    return Ember.A(
      Object.keys(monegraphPalette).map((k) => {
        return this.get('MonegraphPalette')[k];
      })
    );
  },

  showExampleAnimationsHint: true,

  actions: {
    resetPulse() {
      this.toggleProperty('showExampleAnimationsHint');
      Ember.run.next(() => {
        this.toggleProperty('showExampleAnimationsHint');
      });
    }
  }
});
