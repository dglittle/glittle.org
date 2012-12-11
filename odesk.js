
function drawODesk() {
    var d = $('<div/>')
    
    var left = $('<div style="float:left;width:450px;"/>')
    d.append(left)
    var right = $('<div style="float:left;width:450px;"/>')
    d.append(right)
    d.append($('<div style="clear:both"/>'))
    
    function drawItem(item) {
        var d = $('<div/>')
        if (item.link) {
            d.append($('<div style="margin-top:20px;font-weight:bold;"/>').append($('<a/>').attr('href', item.link).text(item.name)))
        } else {
            d.append($('<div style="margin-top:20px;font-weight:bold"/>').text(item.name))
        }
        d.append($('<div style="font-size:small;"/>').html(item.description.replace(/\[\[(.*?) (\S+?)\]\]/g, function (g0, g1, g2) {
            return '<a href="' + g2 + '">' + g1 + '</a>'
        })))
        return d
    }
    
    function drawList(title, contents) {
        var d = $('<div style="width:410px;padding:20px"/>')
        d.append($('<div style="font-size:small;color:grey"/>').text(title))
        foreach(contents, function (x) {
            d.append(drawItem(x))
        })
        return d
    }

    left.append(drawList("current projects", [
        {
            name : "Packaged Services",
            description : "Attempt to put some well defined structure around common tasks in an effort to make hiring for these tasks more like a commodity. The hope is that adding structure will help both clients and contractors know exactly what they can expect from various jobs, and bring more liquidity to the market."
        },
        {
            name : "Pomodoro Hiring",
            description : "Attempt at real-time expert hiring. The idea is to standardize the hiring process around 20 minute blocks of time. The hope is to attract the spare time of experts who may be otherwise employed. About 600 people from Hacker News have signed up for the beta, which is still under development.",
            link : "http://apps.glittle.org/pomhire"
        },
        {
            name : "TalentCourt",
            description : "Attempt to assess people's skills with a game. Key hypotheses: (1) people can evaluate each other, without needing 'expert judges'; (2) using comparisons rather than absolute ratings does a better job of finding the best work, and prevents rating inflation; (3) people's work on small 5 minute tasks is indicative of their skill at larger tasks.",
            link : "http://talentcourt.com" 
        },
    ]))
    
    right.append(drawList("collaborations", [
        {
            name : "Micro Outsourcing",
            description : "[[Max Goldman http://web.mit.edu/maxg/]] at MIT has a tool called [[Collabode http://groups.csail.mit.edu/uid/collabode/]] for giving programmers etherpad-like access to an Eclipse coding environment. We're running an experiment where a programmer outsources small bits of code in real-time to a pool of oDesk workers, to see what programming this way is like."
        },
        {
            name : "Gmail Valet",
            description : "[[Nicolas Kokkalis http://www.stanford.edu/~kokkalis/]] at Stanford has a tool for giving people partial access to a Gmail account. We want to see if people can use this tool to hire remote assistants on oDesk to help with email processing."
        },
        {
            name : "HireArt Experiment",
            description : "HireArt has a number of expert evaluators, and we are running an experiment hiring a number of oDesk workers to perform tasks in a variety of domains, and analyse the quality. We hope to have results May 11."
        },
    ]))
    
    left.append(drawList("past projects", [
        {
            name : "HENIAC",
            description : "Named for 'Human' ENIAC, this was an attempt at real-time hiring. The system ran for about a month. During this time, people could press a 'summon' button on a webpage, and a worker would appear in a chat window. Workers were paid by the hour. Workers were also paid a fraction of their hourly rate to wait, so that we would have people available all the time. Unfortunately, people did not use the system very much, possibly because the expertise of the workers was too general, and their use as virtual assistants may have been limited by people's unwillingness to entrust passwords to online workers. The Gmail Valet will hopefully take a step toward addressing that problem. The Pomodoro Hiring project attempts to address the 'expertise' issue by building a pool of experts.",
        },
    ]))
    
    right.append(drawList("on the road", [
        {
            name : "HCI Talk at University of Washington (presenter)",
            description : "May 30. This was a repeat of the Google Tech Talk."
        },
        {
            name : "Google Tech Talk (presenter)",
            description : "May 29. This talk presents the goal of the 'google of work', where people hire experts to help with their work as seamlessly as they use google searches. Talk gives an overview of current efforts toward this goal, including TalentCourt and Pomodoro Hiring."
        },
        {
            name : "IFTF Panel (presenter)",
            description : "May 16. Panel on the future of crowdsourcing. Presents a vision of the future of crowdsourcing that is somewhere between the current MTurk and oDesk."
        },
        {
            name : "Collective Intelligence 2012",
            description : "April 18-20. First instance of this conference -- very well attended, and great talks. Collective intelligence is related to 'crowdsourcing', but broader, including remote work like oDesk.",
            link : "http://www.ci2012.org/"
        },
        {
            name : "MITCNC Crowdsourcing Panel (presenter)",
            description : "April 17. A good perspective of crowdsourcing from a number of different angles. Discussion included some talk about the potential for expert crowdsourcing with sites like oDesk, as well as the potential for 'crowdsourced education', where people may learn new skills in apprentice fashion doing jobs online.",
            link : "http://blackbaud.mitcnc.org/site/apps/nlnet/content2.aspx?c=muIZLaMMJrE&b=5962243&ct=11665599&notoc=1"
        },
        {
            name : "HCI Lunch Talk at Stanford (presenter)",
            description : "Jan 11. Presented TalentCourt, motivating it with trying to identify experts quickly and reliably, and showed demo of writing and drawing games."
        },
        {
            name : "UIST 2011",
            description : "October 16-19, 2011. UIST is a user interface conference, but it is the place that TurKit was published, and the user interface community has a lot of interest in crowdsourcing and remote work for many reasons, including a source of user-study participants, as well as motivation to create collaboration tools like Max Goldman's Collabode tool allowing etherpad like collaboration in a shared Eclipse environment.",
            link : "http://www.acm.org/uist/uist2011/"
        },
        {
            name : "HCOMP 2011",
            description : "August 8, 2011. HCOMP (Human Computation) focusses a lot on crowdsourcing and games-with-a-purpose. Traditionally, the primary tool for this work has been Mechanical Turk, but there is growing use of oDesk, both to find expert workers, and for quality control purposes.",
            link : "http://humancomputation.com/2011/Welcome.html"            
        }
    ]))
    
    return d
}

