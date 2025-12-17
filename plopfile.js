export default function (plop) {
    plop.setGenerator("web-component", {
        description: "generate a new web component template",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What your Web Component called? (Uppercase for each word)"
            },
            {
                type: "input",
                name: "description",
                message: "Please give a description for this Web Component "
            },
            {
                type: "input",
                name: "figma-link",
                message: "Please provide a Figma link to the Web Component: "
            }
        ],
        actions: [
            {
                type: "add",
                path: "src/{{dashCase name}}.js",
                templateFile: ".plop/controller.hbs",
            },
        ],
    });
}