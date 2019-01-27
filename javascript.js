var shirt = true
var sweat = false
var pull = false

var black = false
var white = false
var green = false
var blue = false
var red = false
var bord = false
var gray = false

function init() {
}

function changebackshirt() {
    if (white == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/white.png')";;
    } else if (black == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/black.png')";
    } else if (blue == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/blue.png')";
    } else if (red == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/red.png')";
    } else if (green == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/green.png')";
    } else if (bord == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/bord.png')";
    } else if (gray == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/gray.png')";
    } else {document.getElementById("creation").style.backgroundImage="url('create/shirt/black.png')"}

  document.getElementById("minishirt").style.backgroundImage="url('create/mini/select_shirt.png')";
  document.getElementById("minisweat").style.backgroundImage="url('create/mini/sweat.png')";
  document.getElementById("minipull").style.backgroundImage="url('create/mini/pull.png')";

  shirt = true
  sweat = false
  pull = false
}

function changebacksweat() {
    if (white == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/white.png')";;
    } else if (black == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/black.png')";
    } else if (blue == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/blue.png')";
    } else if (red == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/red.png')";
    } else if (green == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/green.png')";
    } else if (bord == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/bord.png')";
    } else if (gray == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/gray.png')";
    } else {document.getElementById("creation").style.backgroundImage="url('create/sweat/black.png')"}

  document.getElementById("minisweat").style.backgroundImage="url('create/mini/select_sweat.png')";
  document.getElementById("minipull").style.backgroundImage="url('create/mini/pull.png')";
  document.getElementById("minishirt").style.backgroundImage="url('create/mini/shirt.png')";
  shirt = false
  sweat = true
  pull = false
}

function changebackpull() {
  if (white == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/white.png')";;
  } else if (black == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/black.png')";
  } else if (blue == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/blue.png')";
  } else if (red == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/red.png')";
  } else if (green == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/green.png')";
  } else if (bord == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/bord.png')";
  } else if (gray == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/gray.png')";
} else {document.getElementById("creation").style.backgroundImage="url('create/pull/black.png')"}

  document.getElementById("minipull").style.backgroundImage="url('create/mini/select_pull.png')";
  document.getElementById("minishirt").style.backgroundImage="url('create/mini/shirt.png')";
  document.getElementById("minisweat").style.backgroundImage="url('create/mini/sweat.png')";
  shirt = false
  sweat = false
  pull = true
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function colorwhite() {
  if (shirt == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/white.png')";}
  if (pull == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/white.png')";}
  if (sweat == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/white.png')";}

  document.getElementById("whiteico").style.border="3px solid #006eff";
  document.getElementById("blackico").style.border="3px solid #ababab";
  document.getElementById("redico").style.border="3px solid #ababab";
  document.getElementById("blueico").style.border="3px solid #ababab";
  document.getElementById("greenico").style.border="3px solid #ababab";
  document.getElementById("bordico").style.border="3px solid #ababab";
  document.getElementById("grayico").style.border="3px solid #ababab";


  white = true
  black = false
  red = false
  blue = false
  green = false
  bord = false
  gray = false
}
function colorblack() {
  if (shirt == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/black.png')";}
  if (pull == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/black.png')";}
  if (sweat == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/black.png')";}

  document.getElementById("whiteico").style.border="3px solid #ababab";
  document.getElementById("blackico").style.border="3px solid #006eff";
  document.getElementById("redico").style.border="3px solid #ababab";
  document.getElementById("blueico").style.border="3px solid #ababab";
  document.getElementById("greenico").style.border="3px solid #ababab";
  document.getElementById("bordico").style.border="3px solid #ababab";
  document.getElementById("grayico").style.border="3px solid #ababab";

  white = false
  black = true
  red = false
  blue = false
  green = false
  bord = false
  gray = false
}
function colorred() {
  if (shirt == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/red.png')";}
  if (pull == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/red.png')";}
  if (sweat == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/red.png')";}

  document.getElementById("whiteico").style.border="3px solid #ababab";
  document.getElementById("blackico").style.border="3px solid #ababab";
  document.getElementById("redico").style.border="3px solid #006eff";
  document.getElementById("blueico").style.border="3px solid #ababab";
  document.getElementById("greenico").style.border="3px solid #ababab";
  document.getElementById("bordico").style.border="3px solid #ababab";
  document.getElementById("grayico").style.border="3px solid #ababab";

  white = false
  black = false
  red = true
  blue = false
  green = false
  bord = false
  gray = false
}
function colorblue() {
  if (shirt == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/blue.png')";}
  if (pull == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/blue.png')";}
  if (sweat == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/blue.png')";}

  document.getElementById("whiteico").style.border="3px solid #ababab";
  document.getElementById("blackico").style.border="3px solid #ababab";
  document.getElementById("redico").style.border="3px solid #ababab";
  document.getElementById("blueico").style.border="3px solid #006eff";
  document.getElementById("greenico").style.border="3px solid #ababab";
  document.getElementById("bordico").style.border="3px solid #ababab";
  document.getElementById("grayico").style.border="3px solid #ababab";

  white = false
  black = false
  red = false
  blue = true
  green = false
  bord = false
  gray = false
}
function colorgreen() {
  if (shirt == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/green.png')";}
  if (pull == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/green.png')";}
  if (sweat == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/green.png')";}

  document.getElementById("whiteico").style.border="3px solid #ababab";
  document.getElementById("blackico").style.border="3px solid #ababab";
  document.getElementById("redico").style.border="3px solid #ababab";
  document.getElementById("blueico").style.border="3px solid #ababab";
  document.getElementById("greenico").style.border="3px solid #006eff";
  document.getElementById("bordico").style.border="3px solid #ababab";
  document.getElementById("grayico").style.border="3px solid #ababab";

  white = false
  black = false
  red = false
  blue = false
  green = true
  bord = false
  gray = false
}
function colorbord() {
  if (shirt == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/bord.png')";}
  if (pull == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/bord.png')";}
  if (sweat == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/bord.png')";}

  document.getElementById("whiteico").style.border="3px solid #ababab";
  document.getElementById("blackico").style.border="3px solid #ababab";
  document.getElementById("redico").style.border="3px solid #ababab";
  document.getElementById("blueico").style.border="3px solid #ababab";
  document.getElementById("greenico").style.border="3px solid #ababab";
  document.getElementById("bordico").style.border="3px solid #006eff";
  document.getElementById("grayico").style.border="3px solid #ababab";

  white = false
  black = false
  red = false
  blue = false
  green = false
  bord = true
  gray = false
}

function colorgray() {
  if (shirt == true) {document.getElementById("creation").style.backgroundImage="url('create/shirt/gray.png')";}
  if (pull == true) {document.getElementById("creation").style.backgroundImage="url('create/pull/gray.png')";}
  if (sweat == true) {document.getElementById("creation").style.backgroundImage="url('create/sweat/gray.png')";}

  document.getElementById("whiteico").style.border="3px solid #ababab";
  document.getElementById("blackico").style.border="3px solid #ababab";
  document.getElementById("redico").style.border="3px solid #ababab";
  document.getElementById("blueico").style.border="3px solid #ababab";
  document.getElementById("greenico").style.border="3px solid #ababab";
  document.getElementById("bordico").style.border="3px solid #ababab";
  document.getElementById("grayico").style.border="3px solid #006eff";

  white = false
  black = false
  red = false
  blue = false
  green = false
  bord = false
  gray = true
}
