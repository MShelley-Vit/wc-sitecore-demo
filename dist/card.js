const styles =  /* CSS */`

:host {
    all: unset;
    display: block;
    background: #fff;
    contain: content;
    height: 100%;
    box-shadow: 0px 10px 25px rgba(73, 101, 132, .08);
    border-radius:  1.2rem;
    overflow: auto;
    text-decoration: none;
    transition: box-shadow .5s;
    max-width: 32.1rem;
}

:host([href]:hover) {
    box-shadow: 0px 10px 25px rgba(73,101,132,.3);
    cursor: pointer;
}

:host([href]:hover) ::slotted([slot="title"]) {
    color: #e71757 !important;
}

.card {
    display: grid;
    grid-template-areas: 
        "header"
        "image"
        "content"
        "footer";
    grid-template-rows: min-content auto 1fr min-content;
    text-align: center;
    height: inherit;
    text-decoration: none;
}

:host([orientation="horizontal"]) .card {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
        "image content"
        "image footer";
    text-align: start;
    column-gap: 1.6rem;

    ::slotted(img) {
        height: 100%;
    }
}

:host([orientation="horizontal"]) .footer {
    padding-inline: 3.2rem;
}

a * {
    text-decoration: none;
    color: initial;
}

.image {
    grid-area: image;
}

.content {
    grid-area: content;
    padding: 2.4rem;

    @media (width >= 768px) {
        padding-inline: 3.2rem;
    }
}

.footer {
    grid-area: footer;
    padding-block-end: 2.4rem;
    font-size: 1.2rem !important;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.3333333333;
    opacity: .6;

    @media (width >= 768px) {
        padding-block-end: 3.2rem;
    }
}

::slotted(img) {
    width: 100%;
    min-height: 200px;
    object-fit: cover;
}

::slotted([slot="title"]) {
    font-size: 2.4rem !important;
    font-weight: 600 !important;
    letter-spacing: -1px;
    line-height: 1.3333333333;
    margin-bottom: 0.8rem !important;
    margin-top: unset !important;
}

::slotted([slot="kicker"]) {
    text-transform: uppercase;
    font-size: 1.2rem !important;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 1.6rem !important;
    line-height: 1.5;
    display: inline-block;
    color: #666;
}

::slotted(div[slot="action"]) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.6rem;
}

.vds-button {
    box-sizing: border-box;
    min-width: 100% !important;
    position: unset !important;
    margin-right: unset !important;
    margin-bottom: unset !important;
}

:host-context(.vds-grid),
:host-context(.vds-auto-layout)  {
    max-width: unset !important;
}
`;

const css = new CSSStyleSheet();
css.replaceSync(styles);

/**
 * Card <vit-card>
 * 
 * @summary A Vitality Card component
 * @since 1.0.0
 * @status beta
 * 
 * @attribute {string} href - The URL destination when clicking on the card. Note: if you want buttons or styled links, you don't need the href attribute and instead apply to buttons/links.
 * 
 * @slot default - The main body of the card
 * @slot image -  The card image
 * @slot kicker - The card tag
 * @slot title - The title for the card
 * @slot action - The card links/buttons
 * @slot footer - The card footer
 */

class Card extends HTMLElement {
    static observedAttributes = ['href'];

    constructor() {
        super();
        super.attachShadow({ mode: "open" })
        this.shadowRoot.adoptedStyleSheets = [css];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const href = this.getAttribute('href');
        const template = /* HTML */ `
            ${href ? `<a class="card" href="${href}">` : '<div class="card">'}
                <div class="image">
                    <slot name="image" height="150" width="150"></slot>
                </div>
                <div class="content">
                    <slot name="kicker"></slot>
                    <slot name="title"></slot>
                    <slot></slot>
                    <slot name="action"></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        `;

        this.shadowRoot.innerHTML = template;
    }
}

customElements.define("vit-card", Card);