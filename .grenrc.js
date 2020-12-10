let printPreamble = true;
const preamble = `# Changelog
Some general stuff we want to say.`;

function templ({ heading }) {
    const line = `\n## ${heading}\n`;
    if (printPreamble) {
        printPreamble = false;
        return preamble + line;
    }
    return line;
}

module.exports = {
    "dataSource": "prs",
    "prefix": "Move2Kube ",
    "onlyMilestones": false,
    "groupBy":
    {
        "🚀 Features": ["enhancement"],
        "🐛 Bug Fixes": ["bug"]
    },
    "template": {
        "group": templ,
        "issue": ({ name, text, url }) => `- ${name} [${text}](${url})`,
    }
}