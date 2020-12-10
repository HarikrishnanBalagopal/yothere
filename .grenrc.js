let printPreamble = true;

function templ({ labels, name, text, url }) {
    const preamble = `# Changelog
Some general stuff we want to say.
`;
    const line = `- ${name} [${text}](${url})`;
    if (printPreamble) {
        printPreamble = false;
        return preamble + line;
    }
    return line;
}

module.exports = {
    "dataSource": "prs",
    "prefix": "Move2Kube v",
    "onlyMilestones": false,
    "groupBy":
    {
        "🚀 Features": ["enhancement"],
        "🐛 Bug Fixes": ["bug"]
    },
    "template": {
        "issue": templ,
    }
}