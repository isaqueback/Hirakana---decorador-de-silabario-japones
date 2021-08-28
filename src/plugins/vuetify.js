import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                'main-blue': '#00B8A9',
                'list-item': '#bbded6',
                'list-item-hover': '#afd0c8',
                'list-item-text': '#f6f6f6',
            }
        }
    }
});
