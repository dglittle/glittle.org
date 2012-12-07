var data = {
    defaultDisplay : function (e, name) {
        var d = $('<div/>')
        d.append($('<div class="title"/>').text(name))
        foreach(e, function (e) {
            d.append($('<div/>').text(e))
        })
        return d
    },
    
    utilsDisplay : function (e) {
        var d = $('<div/>')
        d.append('<div class="title">utils</div>')
        foreach(e, function (v, k) {
            d.append($('<div/>').append($('<a/>').attr('href', v).text(k)))
        })
        return d
    },
    utils : {
        "JavaScript Eval" : "utils/JavaScriptEval",
        "Python Eval" : "http://python-eval.appspot.com",
        "Regular Expression Editor" : "utils/jsRegex",
        "Java String Editor" : "utils/JavaStringEditor",
        "Web Post Util" : "utils/PostUtil",
        "Caps Util" : "utils/CapsUtil",
        "HTML Viewer" : "utils/HTML_Viewer"
    },
    
    servicesDisplay : function (e) {
        var d = $('<div/>')
        d.append('<div class="title">services</div>')
        foreach(e, function (v, k) {
            d.append($('<div/>').append($('<a/>').attr('href', v).text(k)))
        })
        return d
    },
    services : {
        "Disqus" : "http://disqus.com",
        "FeedBurner" : "http://www.feedburner.com",
        "Google Analytics" : "http://www.google.com/analytics",
        "Dropbox" : "http://dropbox.com",
    },
    
    miscDisplay : function (e, name) {
        var d = $('<div/>')
        d.append($('<div class="title"/>').text(name))
        foreach(e, function (e, k) {
            var dd = $('<div/>')
            dd.append($('<div class="subtle"/>').text(k))
            foreach(e, function (e) {
                dd.append($('<div/>').text(e))
            })
            dd.append($('<div style="width:1px;height:20px"/>'))
            d.append(dd)
        })
        return d
    },
    misc : {
        concerts : [
            "Tegan and Sara - Boston, MA, 2011",
            "The Magnetic Fields - Boston, MA, 2011",
            "Blue October - Boston, MA, ~2007",
            "Alkaline Trio - Boston, MA, ~2006",
            "Our Lady Peace - Boston, MA, ~2005",
            "Hootie & the Blowfish - Sedona, AZ, ~2002"
        ],
        broadway : [
            "Avenue Q, 2010"
        ],
        "programming languages" : [
            "JavaScript 2005-now",
            "Python 2010-2011",
            "Java 2003-2011",
            "Lua 2002-2003",
            "C/C++ ~1993-2003",
            "QBasic ~1990~1993"
        ],
        artists : [
            "Rene Magritte",
            "Salvador Dali", 
            "M. C. Escher"
        ],
        comics : [
            "The Sandman",
            "The Far Side",
            "Calvin and Hobbes",
            "Foxtrot",
            "Dilbert"
        ],
        jobs : [
            "Labor Scientist - oDesk, 2011-now",
            "Intern - Xerox Research Center Webster, 2010",
            "Intern - IBM Almaden Research Center, 2006, 2007",
            "RA/TA - CSAIL MIT, 2005-2011",
            "Undergrad RA - CUbiC Lab, ASU, 2003-2005",
            "Game Programmer - Professor Fog's Workshop, 2001-2003",
            "Software Engineer - Cinematix Studios, 2001",
            "Food Handler - Stapley Jr. High Cafeteria, 1995-1997"
        ],
        schools : [
            "MIT, Cambridge, MA, 2005-2011",
            "Arizona State University, Tempe, AZ, 2000, 2003-2005",
            "Mountain View High School, Mesa, AZ, 1997-2000",
            "Stapley Jr. High School, Mesa, AZ, 1994-1997",
            "Snowflake Jr. High School, Snowflake, AZ, 1994",
            "Taylor Elementary, Taylor, AZ, 1990-1994",
            "Heatherbrae Elementary, Phoenix, AZ, 1988-1990"
        ]
    },
    
    papersDisplay : function (e) {
        var d = $('<div/>')
        d.append('<div class="title">papers</div>')
        var ul = $('<ul></ul>')
        foreach(e, function (e) {
            ul.append('<li style="margin-bottom:8px"><a style="text-decoration:none" href="' + escapeXml(e.pdf) + '">' + escapeXml(e.title) + '</a><br><small style="color:grey">' + escapeXml(e.authors) + '. <i>' + escapeXml(e.venue + ', ' + e.year) + '</i></small></li>')
        })
        d.append(ul)
        return d
    },
    papers : [
        {
            "authors" : "Greg Little",
            "title" : "Programming with Human Computation",
            "venue" : "PhD Thesis - MIT",
            "year" : 2011,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/PhD Thesis.pdf"
        },    
        {
            "authors" : "Greg Little, Lydia B. Chilton, Max Goldman, and Robert C. Miller",
            "title" : "Exploring Iterative and Parallel Human Computation Processes",
            "venue" : "HCOMP",
            "year" : 2010,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/HCOMP2010.pdf"
        },    
        {
            "authors" : "Greg Little, Lydia B. Chilton, Max Goldman, and Robert C. Miller",
            "title" : "TurKit: Human Computation Algorithms on Mechanical Turk",
            "venue" : "UIST",
            "year" : 2010,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/TurKitUIST2010.pdf"
        },    
        {
            "authors" : "Greg Little",
            "title" : "Programming with Keywords",
            "venue" : "Masters Thesis - MIT",
            "year" : 2007,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/MS Thesis.pdf"
        },    
        {
            "authors" : "Greg Little, and Robert C. Miller",
            "title" : "Keyword Programming in Java",
            "venue" : "Journal of ASE",
            "year" : 2008,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/Keyword Programming in Java JASE 2008.pdf"
        },    
        {
            "authors" : "Greg Little, and Robert C. Miller",
            "title" : "Keyword Programming in Java",
            "venue" : "ASE",
            "year" : 2007,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/Keyword Programming ASE 2007.pdf"
        },    
        {
            "authors" : "Greg Little, Tessa A. Lau, Allen Cypher, James Lin, Eben M. Haber, and Eser Kandogan",
            "title" : "Koala: Capture, Share, Automate, Personalize Business Processes on the Web",
            "venue" : "CHI",
            "year" : 2007,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/Koala CHI 2007.pdf"
        },    
        {
            "authors" : "Greg Little, and Robert C. Miller",
            "title" : "Translating Keyword Commands into Executable Code",
            "venue" : "UIST",
            "year" : 2006,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/Keyword Commands UIST 2006.pdf"
        },    
        {
            "authors" : "Robert D. Carr, Goran Konjevod, Greg Little, Venkatesh Natarajan and Ojas Parekh",
            "title" : "Compacting Cuts: A New Linear Formulation for Minimum Cut",
            "venue" : "TALG",
            "year" : 2009,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/TALG.pdf"
        },    
        {
            "authors" : "Robert D. Carr, Goran Konjevod, Greg Little, Venkatesh Natarajan and Ojas Parekh",
            "title" : "Compacting Cuts: A New Linear Formulation for Minimum Cut",
            "venue" : "SODA",
            "year" : 2007,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/Compacting Cuts SODA 2007.pdf"
        },    
        {
            "authors" : "Greg Little, Sreekar Krishna, John Black and Sethuraman Panchanathan",
            "title" : "A Methodology for Evaluating Robustness of Face Recognition Algorithms with Respect to Variations in Pose Angle and Illumination Angle",
            "venue" : "ICASSP",
            "year" : 2005,
            "pdf" : "http://dl.dropbox.com/u/304762/Papers/Face Recognition ICASSP 2005.pdf"
        }
    ],
    
    games : [
        "LIMBO",
        
        "Portal 2",
        "Portal",
        
        "Plants vs Zombies",
        
        "World of Goo",
        "Psychonauts",
        "Braid",
        
        "Dreamfall",
        "The Longest Journey",
        
        "Grim Fandango",
        
        "StarCraft 2",
        "StarCraft",
        "WarCraft 3",
        "WarCraft 2",
        "WarCraft",
        
        "Broken Sword: The Shadow of the Templars",
        "King's Quest 6",
    
        "Ultima Online",
        
        "Baldur's Gate",
        
        "Exile",
        "Riven",
        "Myst",
        
        "Mario 64",
        "Super Mario Bros. 3",
        "Super Mario Bros. 2",
        
        "Tetris"
    ],
    
    "tv shows" : [
		"Futurama",
		"The Life & Times of Tim",
		"Veronica Mars",
		"Dollhouse",
		"Buffy the Vampire Slayer",
		"Battlestar Galactica",
		"Firefly",
		"Arrested Development",
		"Star Trek: The Next Generation",
		"The Simpsons"
	],
    
    booksDisplay : function (e) {
        var d = $('<div/>')
        d.append('<div class="title">books</div>')
        foreach(e, function (e) {
            d.append('<a href="http://books.google.com/books?id=' + e.googleId + '"><img width="96" src="http://books.google.com/books?id=' + e.googleId + '&printsec=frontcover&img=1&zoom=1" title="' + escapeXml(e.title + ' by ' + e.author) + '"></img></a>')
        })
        return d
    },
    books : [
        {
            "title" : "Souls in the Great Machine",
            "author" : "Sean McMullen",
            "googleId" : "_8UGU8j7KtIC"
        },
        {
            "title" : "The Diamond Age",
            "author" : "Neal Stephenson",
            "googleId" : "LIWY6afN5kQC"
        },
        {
            "title" : "Marooned in Realtime",
            "author" : "Vernor Vinge",
            "googleId" : "H1NOwjENGOkC"
        },
        {
            "title" : "The Peace War",
            "author" : "Vernor Vinge",
            "googleId" : "hwD6GhKKQ0EC"
        },
        {
            "title" : "Slaughterhouse Five",
            "author" : "Kurt Vonnegut",
            "googleId" : "GKPktrYG7sUC"
        },
        {
            "title" : "The Witling",
            "author" : "Vernor Vinge",
            "googleId" : "_LUzhSyg6TUC"
        },
        {
            "title" : "Wyrms",
            "author" : "Orson Scott Card",
            "googleId" : "MS-1AAAACAAJ"
        },
        {
            "title" : "Harry Potter and the Deathly Hallows",
            "author" : "J. K. Rowling",
            "googleId" : "GZAoAQAAIAAJ"
        },
        {
            "title" : "Earthweb",
            "author" : "Marc Stiegler",
            "googleId" : "G24NAAAACAAJ"
        },
        {
            "title" : "Watership Down: A Novel",
            "author" : "Richard Adams",
            "googleId" : "ittzoegmRpAC"
        },
        {
            "title" : "Snow Crash",
            "author" : "Neal. Stephenson",
            "googleId" : "RMd3GpIFxcUC"
        },
        {
            "title" : "Rainbows End",
            "author" : "Vernor Vinge",
            "googleId" : "SrLwPdBJodMC"
        },
        {
            "title" : "Neuromancer",
            "author" : "William Gibson",
            "googleId" : "_W9HAAAACAAJ"
        },
        {
            "title" : "True Names and Other Dangers",
            "author" : "Vernor Vinge",
            "googleId" : "o4NVAAAACAAJ"
        },
        {
            "title" : "How to Be Good",
            "author" : "Nick Hornby",
            "googleId" : "KIYfSQAACAAJ"
        },
        {
            "title" : "The Kite Runner",
            "author" : "Khaled Hosseini",
            "googleId" : "c1KrAAAACAAJ"
        },
        {
            "title" : "Harry Potter And The Half-Blood Prince",
            "author" : "J. K. Rowling",
            "googleId" : "8W_bPAAACAAJ"
        },
        {
            "title" : "The Da Vinci Code",
            "author" : "Dan Brown",
            "googleId" : "aZwCAAAACAAJ"
        },
        {
            "title" : "Harry Potter and the Order of the Phoenix",
            "author" : "J K Rowling",
            "googleId" : "AnjKOAAACAAJ"
        },
        {
            "title" : "A Deepness in the Sky",
            "author" : "Vernor Vinge",
            "googleId" : "jmP6_EGWx8sC"
        },
        {
            "title" : "A Fire Upon The Deep",
            "author" : "Vernor Vinge",
            "googleId" : "UGAKB3r0sZQC"
        },
        {
            "title" : "Tatja Grimm\'s World",
            "author" : "Vernor Vinge",
            "googleId" : "EYOov-roCHAC"
        },
        {
            "title" : "Harry Potter and the Goblet of Fire",
            "author" : "J. K. Rowling",
            "googleId" : "8cKcAAAACAAJ"
        },
        {
            "title" : "Harry Potter and the Prisoner of Azkaban",
            "author" : "J. K. Rowling",
            "googleId" : "INpjAAAACAAJ"
        },
        {
            "title" : "Harry Potter and the Chamber of Secrets",
            "author" : "J. K. Rowling",
            "googleId" : "KUUwAAAACAAJ"
        },
        {
            "title" : "Harry Potter and the Sorcerer\'s Stone",
            "author" : "J. K. Rowling",
            "googleId" : "C86XAAAACAAJ"
        },
        {
            "title" : "Foundation's edge",
            "author" : "Isaac Asimov",
            "googleId" : "uoE7v9OJ6rIC"
        },
        {
            "title" : "The Foundation Trilogy",
            "author" : "Isaac Asimov",
            "googleId" : "8JseAAAAIAAJ"
        },
        {
            "title" : "The Bonfire of the Vanities",
            "author" : "Tom Wolfe",
            "googleId" : "2GF6U-Pq2bYC"
        },
        {
            "title" : "Ender\'s Game",
            "author" : "Orson Scott Card",
            "googleId" : "tPWeGXw0XxgC"
        },
        {
            "title" : "A Canticle for Leibowitz",
            "author" : "Walter M. Miller",
            "googleId" : "k53eZ2ARZPwC"
        },
        {
            "title" : "The Fixer",
            "author" : "Bernard Malamud",
            "googleId" : "bbmRGBT6XEcC"
        },
        {
            "title" : "The Fountainhead",
            "author" : "Ayn Rand",
            "googleId" : "me3gAAAACAAJ"
        },
        {
            "title" : "The Sword of Shannara",
            "author" : "Terry Brooks",
            "googleId" : "INbBHAAACAAJ"
        },
        {
            "title" : "The Catcher in the Rye",
            "author" : "Jerome David Salinger",
            "googleId" : "j--EMdEfmbkC"
        },
        {
            "title" : "One Hundred Years of Solitude",
            "author" : "Gabriel Garc\u00eda M\u00e1rquez",
            "googleId" : "wPPdAQAACAAJ"
        },
        {
            "title" : "The Remains of the Day",
            "author" : "Kazuo Ishiguro",
            "googleId" : "Gc1JAAAACAAJ"
        },
        {
            "title" : "Siddhartha",
            "author" : "Hermann Hesse",
            "googleId" : "BwrmAQAACAAJ"
        },
        {
            "title" : "My Antonia",
            "author" : "Willa Cather",
            "googleId" : "RHhQAgAACAAJ"
        },
        {
            "title" : "The Grapes of Wrath",
            "author" : "John Steinbeck",
            "googleId" : "WW1PAAAACAAJ"
        },
        {
            "title" : "Adventures of Huckleberry Finn",
            "author" : "Mark Twain",
            "googleId" : "r29tz_PId5sC"
        },
        {
            "title" : "Dear and Glorious Physician",
            "author" : "Taylor Caldwell",
            "googleId" : "4S47PtmjTZwC"
        }
    ],
    
    movies : [
        "Napoleon Dynamite",
        "Pulp Fiction",
        "Fight Club",
        "Donnie Darko",
		"Let the Right One In",
		"Pan\'s Labyrinth",
		"Brazil",
		"The Notebook",
		"Lost in Translation",
		"The Hours",
		"Dead Poets Society",
		"Notting Hill",
		"Garden State",
        "The Ring",
		"Life is Beautiful",
		"Cast Away",
		"House of Flying Daggers",
		"Hero",
		"Crouching Tiger, Hidden Dragon",
		"The Shawshank Redemption",
		"Am\u00e9lie",
		"Rushmore",
		"Strictly Ballroom",
		"Minority Report",
		"Good Will Hunting",
        "Men in Black",
		"My Dog Skip",
		"Steel Magnolias",
		"Little Women",
		"The Matrix",
		"Forrest Gump",
		"The Muppet Christmas Carol",
		"The Nightmare Before Christmas",
		"Star Trek IV",
		"Edward Scissorhands",
		"Fried Green Tomatoes",
        "Beetlejuice",
		"Monty Python and the Holy Grail",
		"The Princess Bride",
		"The Lion King",
		"Aladdin",
		"Beauty and the Beast",
		"The Little Mermaid",
		"Robin Hood",
		"The Secret of NIMH",
		"The Dark Crystal",
		"Labyrinth",
        "Willow"
	]
}
