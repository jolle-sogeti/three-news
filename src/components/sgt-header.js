const template = document.createElement('template');
template.innerHTML = `<div><slot></slot></div>
`;

customElements.define('sgt-header',
	class extends HTMLElement {

	constructor() {
		super();
		this.shadow = this.attachShadow({mode: 'open'});

		const style = document.createElement('style');

		style.textContent = `
			div {
				display: flex;
				margin: 1rem 0;
				font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
				font-weight: 400;
				border: 1px solid rgba(34,36,38,.15);
				box-shadow: none;
				min-height: 2.85714286em;

				margin-left: 0;
				margin-right: 0;
				border-radius: 0;
				border: none;
				border-bottom: 2px solid rgba(34,36,38,.15);
			}
		`;

		this.shadow.appendChild(style);

		this.shadow.appendChild(template.content.cloneNode(true));

	}

});
