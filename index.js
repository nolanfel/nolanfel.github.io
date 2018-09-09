//PROJECT CATEGORIES ICONS

document.getElementById("GDDiv").addEventListener("mouseover", GDOn);
document.getElementById("GDDiv").addEventListener("mouseout", GDOff);

function GDOn(){
  document.getElementById("PDText").style.opacity=".5";
  document.getElementById("PDHeader").style.opacity=".5";
  document.getElementById("FEDText").style.opacity=".5";
  document.getElementById("FEDHeader").style.opacity=".5";
  document.getElementById("WDText").style.opacity=".5";
  document.getElementById("WDHeader").style.opacity=".5";
  document.getElementById("PD").style.opacity=".5";
  document.getElementById("FED").style.opacity=".5";
  document.getElementById("WD").style.opacity=".5";
}

function GDOff(){
  document.getElementById("PDText").style.opacity=".8";
  document.getElementById("PDHeader").style.opacity="1";
  document.getElementById("FEDText").style.opacity=".8";
  document.getElementById("FEDHeader").style.opacity="1";
  document.getElementById("WDText").style.opacity=".8";
  document.getElementById("WDHeader").style.opacity="1";
  document.getElementById("PD").style.opacity="1";
  document.getElementById("FED").style.opacity="1";
  document.getElementById("WD").style.opacity="1";
}

document.getElementById("PDDiv").addEventListener("mouseover", PDOn);
document.getElementById("PDDiv").addEventListener("mouseout", PDOff);

function PDOn(){
  document.getElementById("GDText").style.opacity=".5";
  document.getElementById("GDHeader").style.opacity=".5";
  document.getElementById("FEDText").style.opacity=".5";
  document.getElementById("FEDHeader").style.opacity=".5";
  document.getElementById("WDText").style.opacity=".5";
  document.getElementById("WDHeader").style.opacity=".5";
  document.getElementById("GD").style.opacity=".5";
  document.getElementById("FED").style.opacity=".5";
  document.getElementById("WD").style.opacity=".5";
}

function PDOff(){
  document.getElementById("GDText").style.opacity=".8";
  document.getElementById("GDHeader").style.opacity="1";
  document.getElementById("FEDText").style.opacity=".8";
  document.getElementById("FEDHeader").style.opacity="1";
  document.getElementById("WDText").style.opacity=".8";
  document.getElementById("WDHeader").style.opacity="1";
  document.getElementById("GD").style.opacity="1";
  document.getElementById("FED").style.opacity="1";
  document.getElementById("WD").style.opacity="1";
}

document.getElementById("FEDDiv").addEventListener("mouseover", FEDOn);
document.getElementById("FEDDiv").addEventListener("mouseout", FEDOff);

function FEDOn(){
  document.getElementById("GDText").style.opacity=".5";
  document.getElementById("GDHeader").style.opacity=".5";
  document.getElementById("PDText").style.opacity=".5";
  document.getElementById("PDHeader").style.opacity=".5";
  document.getElementById("WDText").style.opacity=".5";
  document.getElementById("WDHeader").style.opacity=".5";
  document.getElementById("GD").style.opacity=".5";
  document.getElementById("PD").style.opacity=".5";
  document.getElementById("WD").style.opacity=".5";
}

function FEDOff(){
  document.getElementById("GDText").style.opacity=".8";
  document.getElementById("GDHeader").style.opacity="1";
  document.getElementById("PDText").style.opacity=".8";
  document.getElementById("PDHeader").style.opacity="1";
  document.getElementById("WDText").style.opacity=".8";
  document.getElementById("WDHeader").style.opacity="1";
  document.getElementById("GD").style.opacity="1";
  document.getElementById("PD").style.opacity="1";
  document.getElementById("WD").style.opacity="1";
}

document.getElementById("WDDiv").addEventListener("mouseover", WDOn);
document.getElementById("WDDiv").addEventListener("mouseout", WDOff);

function WDOn(){
  document.getElementById("GDText").style.opacity=".5";
  document.getElementById("GDHeader").style.opacity=".5";
  document.getElementById("PDText").style.opacity=".5";
  document.getElementById("PDHeader").style.opacity=".5";
  document.getElementById("FEDText").style.opacity=".5";
  document.getElementById("FEDHeader").style.opacity=".5";
  document.getElementById("GD").style.opacity=".5";
  document.getElementById("PD").style.opacity=".5";
  document.getElementById("FED").style.opacity=".5";
}

function WDOff(){
  document.getElementById("GDText").style.opacity=".8";
  document.getElementById("GDHeader").style.opacity="1";
  document.getElementById("PDText").style.opacity=".8";
  document.getElementById("PDHeader").style.opacity="1";
  document.getElementById("FEDText").style.opacity=".8";
  document.getElementById("FEDHeader").style.opacity="1";
  document.getElementById("GD").style.opacity="1";
  document.getElementById("PD").style.opacity="1";
  document.getElementById("FED").style.opacity="1";
}

//ORB CARD ICONS

document.getElementById("GDOrb").addEventListener("mouseover", GDOrbOn);
document.getElementById("GDOrb").addEventListener("mouseout", GDOrbOff);
function GDOrbOn(){
  document.getElementById("GDOrb").src="icons/GDIcon.png";
}
function GDOrbOff(){
  document.getElementById("GDOrb").src="icons/GDIcon3.png";
}

document.getElementById("PDOrb").addEventListener("mouseover", PDOrbOn);
document.getElementById("PDOrb").addEventListener("mouseout", PDOrbOff);
function PDOrbOn(){
  document.getElementById("PDOrb").src="icons/PDIcon.png";
}
function PDOrbOff(){
  document.getElementById("PDOrb").src="icons/PDIcon3.png";
}

document.getElementById("FEDOrb").addEventListener("mouseover", FEDOrbOn);
document.getElementById("FEDOrb").addEventListener("mouseout", FEDOrbOff);
function FEDOrbOn(){
  document.getElementById("FEDOrb").src="icons/FEDIcon.png";
}
function FEDOrbOff(){
  document.getElementById("FEDOrb").src="icons/FEDIcon3.png";
}

document.getElementById("WDOrb").addEventListener("mouseover", WDOrbOn);
document.getElementById("WDOrb").addEventListener("mouseout", WDOrbOff);
function WDOrbOn(){
  document.getElementById("WDOrb").src="icons/WDIcon.png";
}
function WDOrbOff(){
  document.getElementById("WDOrb").src="icons/WDIcon3.png";
}

//PERKSPOT CARD ICONS

document.getElementById("GDPerkSpot").addEventListener("mouseover", GDPerkSpotOn);
document.getElementById("GDPerkSpot").addEventListener("mouseout", GDPerkSpotOff);
function GDPerkSpotOn(){
  document.getElementById("GDPerkSpot").src="icons/GDIcon.png";
}
function GDPerkSpotOff(){
  document.getElementById("GDPerkSpot").src="icons/GDIcon3.png";
}

document.getElementById("PDPerkSpot").addEventListener("mouseover", PDPerkSpotOn);
document.getElementById("PDPerkSpot").addEventListener("mouseout", PDPerkSpotOff);
function PDPerkSpotOn(){
  document.getElementById("PDPerkSpot").src="icons/PDIcon.png";
}
function PDPerkSpotOff(){
  document.getElementById("PDPerkSpot").src="icons/PDIcon3.png";
}

document.getElementById("FEDPerkSpot").addEventListener("mouseover", FEDPerkSpotOn);
document.getElementById("FEDPerkSpot").addEventListener("mouseout", FEDPerkSpotOff);
function FEDPerkSpotOn(){
  document.getElementById("FEDPerkSpot").src="icons/FEDIcon.png";
}
function FEDPerkSpotOff(){
  document.getElementById("FEDPerkSpot").src="icons/FEDIcon3.png";
}

document.getElementById("WDPerkSpot").addEventListener("mouseover", WDPerkSpotOn);
document.getElementById("WDPerkSpot").addEventListener("mouseout", WDPerkSpotOff);
function WDPerkSpotOn(){
  document.getElementById("WDPerkSpot").src="icons/WDIcon.png";
}
function WDPerkSpotOff(){
  document.getElementById("WDPerkSpot").src="icons/WDIcon3.png";
}

//MICHIGAN FISHING CARD ICONS

document.getElementById("GDMichiganFishing").addEventListener("mouseover", GDMichiganFishingOn);
document.getElementById("GDMichiganFishing").addEventListener("mouseout", GDMichiganFishingOff);
function GDMichiganFishingOn(){
  document.getElementById("GDMichiganFishing").src="icons/GDIcon.png";
}
function GDMichiganFishingOff(){
  document.getElementById("GDMichiganFishing").src="icons/GDIcon3.png";
}

document.getElementById("PDMichiganFishing").addEventListener("mouseover", PDMichiganFishingOn);
document.getElementById("PDMichiganFishing").addEventListener("mouseout", PDMichiganFishingOff);
function PDMichiganFishingOn(){
  document.getElementById("PDMichiganFishing").src="icons/PDIcon.png";
}
function PDMichiganFishingOff(){
  document.getElementById("PDMichiganFishing").src="icons/PDIcon3.png";
}


document.getElementById("WDMichiganFishing").addEventListener("mouseover", WDMichiganFishingOn);
document.getElementById("WDMichiganFishing").addEventListener("mouseout", WDMichiganFishingOff);
function WDMichiganFishingOn(){
  document.getElementById("WDMichiganFishing").src="icons/WDIcon.png";
}
function WDMichiganFishingOff(){
  document.getElementById("WDMichiganFishing").src="icons/WDIcon3.png";
}
