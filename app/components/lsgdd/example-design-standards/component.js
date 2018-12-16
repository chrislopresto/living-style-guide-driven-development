import Ember from 'ember';

const { inject } = Ember;

const emberConfPalette = {
  "EmberConfPalette": {
    "primary": {
      "name": "orange-ish",
      "base": "#ec8820",
    },
    "accent": {
      "name": "red-ish",
      "base": "#e34e32"
    },
    "secondary": {
      "name": "blue-ish",
      "base": "#4aa0b8"
    },
    "another": {
      "name": "green-ish",
      "base": "#8db580"
    },
    "foreground": {
      "name": "black-ish",
      "base": "#695e5c",
    },
    "background": {
      "name": "gray-beige-ish",
      "base": "#eeebeb"
    }
  }
}

export default Ember.Component.extend({
  emberFreestyle: inject.service(),

  // emberConfPalette: computed.alias('emberFreestyle.ember-conf-palette.EmberConfPalette'),
  emberConfPaletteColors: function() {
    return Ember.A(
      Object.keys(emberConfPalette).map((k) => {
        return emberConfPalette[k];
      })
    );
  }
});
