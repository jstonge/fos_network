export let nodes = [
        {
            "id": "Bibliometry",
            "label": "Bib",
            "group": 1,
            "desc": "Citation stuff."
        },
        {
            "id": "Sociology of Science",
            "label": "SocSci",
            "group": 2,
            "desc": "Classical sociology interested into science and groups."
        },
        {
            "id": "Science of Science",
            "label": "SciSci",
            "group": 3,
            "desc": "'Computational' sociology of science. The methods are what make them different from socsci. Sociologists are unhappy about them."
        },
        {
            "id": "Cultural Evolution",
            "label": "CE",
            "group": 4,
            "desc": "Quant folks of antropology. "
        },
        {
            "id": "Organizational Science",
            "label": "OrgSci",
            "group": 5,
            "desc": "They were are into teams within organization before it was cool. Not really about science, more general."
        },
        {
            "id": "F/OSS researchers",
            "label": "FOSS",
            "group": 6,
            "desc": "People interested in the impact of free and open source software, both social and technical."
        },
        {
            "id": "Education",
            "label": "Ed",
            "group": 7,
            "desc": "People interested in the pedagogy of stuff. "
        },
        {
            "id": "Philosophy of collective action",
            "label": "Phi",
            "group": 8,
            "desc": "Can groups be rational? "
        },
        {
            "id": "Network Science",
            "label": "NetSci",
            "group": 9,
            "desc": "The actual network science of groups."
        },
        {
            "id": "Biology",
            "label": "Bio",
            "group": 10,
            "desc": "Biologists also discussed group evolution, but it didn't go well."
        }

    ]

export let links = [
        {
            "source": "Bibliometry",
            "target": "Sociology of Science",
            "value": 32,
            "desc": "Many sociologists of science were into bibliometry and vice versa."
        },
        {
            "source": "Biology",
            "target": "Cultural Evolution",
            "value": 32,
            "desc": ""
        },
        {
            "source": "Sociology of Science",
            "target": "Science of Science",
            "value": 4,
            "desc": ""
        },
        {
            "source": "Cultural Evolution",
            "target": "Sociology of Science",
            "value": 2,
            "desc": "Many sociologists of science were into bibliometry and vice versa."
        },
        {
            "source": "Education",
            "target": "F/OSS researchers",
            "value": 2,
            "desc": "Many sociologists of science were into bibliometry and vice versa."
        },
        {
            "source": "Network Science",
            "target": "Science of Science",
            "value": 32,
            "desc": "Many sociologists of science were into bibliometry and vice versa."
        }
    ]