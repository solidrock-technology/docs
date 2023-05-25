// https://vitepress.dev/guide/custom-theme
import { h, onMounted } from "vue";
import Theme from "vitepress/theme";
import mediumZoom from "medium-zoom";
import "./style.css";

export default {
    ...Theme,
    setup() {
        onMounted(() => {
            mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg)" });
        });
    },
    Layout: () => {
        return h(Theme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        });
    },
    enhanceApp({ app, router, siteData }) {
        // ...
    },
};
