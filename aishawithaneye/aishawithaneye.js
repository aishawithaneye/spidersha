// This is to disable the "right click" on Android. I did this because otherwise you can't tap-hold to see the speech-bubbles that describe what the bubbles are.
document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

// Hovers (for desktop) Below

// var translates your CSS names/classes into Javascript handles
	// ON Spider-sha
		var aisha = $(".aisha");
		var speechbubbleaisha = $("#SpeechBubbleAisha");
	// To Spider-sha's TOP RIGHT
		var resume = $(".resume");
		var speechbubbleresume = $("#SpeechBubbleResume");
	// To Spider-sha's RIGHT
		var youtube = $(".youtube");
		var speechbubbleyoutube = $("#SpeechBubbleYoutube");
		var vegan = $(".vegan");
		var speechbubblevegan = $("#SpeechBubbleVegan");
		var medium = $(".medium");
		var speechbubblemedium = $("#SpeechBubbleMedium");
		var dreamcatcher = $(".dreamcatcher");
		var speechbubbledreamcatcher = $("#SpeechBubbleDreamCatcher");
	// To Spider-sha's TOP LEFT
		var depop = $(".depop");
		var speechbubbledepop = $("#SpeechBubbleDepop");
	// To Spider-sha's LEFT
		var lightwhipyoutube = $(".lightwhipyoutube");
		var speechbubblelightwhipyoutube = $("#SpeechBubbleLightwhipYoutube");
		var lightwhipemail = $(".lightwhipemail");
		var speechbubblelightwhipemail = $("#SpeechBubbleLightwhipEmail");
		var lightwhipinstagram = $(".lightwhipinstagram");
		var speechbubblelightwhipinstagram = $("#SpeechBubbleLightwhipInstagram");
		var lightwhiptiktok = $(".lightwhiptiktok");
		var speechbubblelightwhiptiktok = $("#SpeechBubbleLightwhipTiktok");
	// ABOVE Spider-sha
		var mrpresident = $(".mrpresident");
		var speechbubblemrpresident = $("#SpeechBubbleMrPresident");
		var owl = $(".owl");
		var speechbubbleowl = $("#SpeechBubbleOwl");
		var owlemail = $(".owlemail");
		var speechbubbleowlemail = $("#SpeechBubbleOwlEmail");
		var owlinstagram = $(".owlinstagram");
		var speechbubbleowlinstagram = $("#SpeechBubbleOwlInstagram");
		var owlfacebook = $(".owlfacebook");
		var speechbubbleowlfacebook = $("#SpeechBubbleOwlFacebook");
	// BELOW Spider-sha
		var olddevil = $(".olddevil");
		var speechbubbleolddevil = $("#SpeechBubbleOldDevil");
		var newdevil = $(".newdevil");
		var speechbubblenewdevil = $("#SpeechBubbleNewDevil");
		var pete = $(".pete");
		var speechbubblepete = $("#SpeechBubblePete");
		var realdevil = $(".realdevil");
		var speechbubblerealdevil = $("#SpeechBubbleRealDevil");
		var twitterjim = $(".twitterjim");
		var speechbubbletwitterjim = $("#SpeechBubbleTwitterJim");


// .hover connects the animations in CSS with javascript to play the speech-bubble-popping-out-on-hover animation

// ON Spider-sha
aisha.hover (
  function() {
	speechbubbleaisha.css({
	"animation-name": "expand-bounce",
	"animation-duration": "0.25s"
	});
  },
  function() {
	speechbubbleaisha.css({
	"animation-name": "shrink",
	"animation-duration": "0.1s"
	});
  }
);
// To Spider-sha's TOP RIGHT
resume.hover (
  function() {
    speechbubbleresume.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbleresume.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
// To Spider-sha's RIGHT
youtube.hover (
  function() {
    speechbubbleyoutube.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbleyoutube.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
vegan.hover (
  function() {
    speechbubblevegan.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblevegan.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
medium.hover (
  function() {
    speechbubblemedium.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblemedium.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
dreamcatcher.hover (
  function() {
    speechbubbledreamcatcher.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbledreamcatcher.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
// To Spider-sha's TOP LEFT
depop.hover (
  function() {
    speechbubbledepop.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbledepop.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
// To Spider-sha's LEFT
lightwhipyoutube.hover (
  function() {
    speechbubblelightwhipyoutube.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblelightwhipyoutube.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
lightwhipemail.hover (
  function() {
    speechbubblelightwhipemail.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblelightwhipemail.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
lightwhipinstagram.hover (
  function() {
    speechbubblelightwhipinstagram.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblelightwhipinstagram.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
lightwhiptiktok.hover (
  function() {
    speechbubblelightwhiptiktok.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblelightwhiptiktok.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);

// ABOVE Spider-sha
mrpresident.hover (
  function() {
    speechbubblemrpresident.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblemrpresident.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
owl.hover (
  function() {
    speechbubbleowl.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbleowl.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
owlemail.hover (
  function() {
    speechbubbleowlemail.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbleowlemail.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
owlinstagram.hover (
  function() {
    speechbubbleowlinstagram.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbleowlinstagram.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
owlfacebook.hover (
  function() {
    speechbubbleowlfacebook.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbleowlfacebook.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);

// BELOW Spider-sha
olddevil.hover (
  function() {
    speechbubbleolddevil.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbleolddevil.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
newdevil.hover (
  function() {
    speechbubblenewdevil.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblenewdevil.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
pete.hover (
  function() {
    speechbubblepete.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblepete.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
realdevil.hover (
  function() {
    speechbubblerealdevil.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubblerealdevil.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
twitterjim.hover (
  function() {
    speechbubbletwitterjim.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechbubbletwitterjim.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);