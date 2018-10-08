//SMOOTH SCROLL




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

//BIBLICAL STUDIES INSTITUTE CARD ICONS

document.getElementById("GDBSI").addEventListener("mouseover", GDBSIOn);
document.getElementById("GDBSI").addEventListener("mouseout", GDBSIOff);
function GDBSIOn(){
  document.getElementById("GDBSI").src="icons/GDIcon.png";
}
function GDBSIOff(){
  document.getElementById("GDBSI").src="icons/GDIcon3.png";
}


document.getElementById("PDBSI").addEventListener("mouseover", PDBSIOn);
document.getElementById("PDBSI").addEventListener("mouseout", PDBSIOff);
function PDBSIOn(){
  document.getElementById("PDBSI").src="icons/PDIcon.png";
}
function PDBSIOff(){
  document.getElementById("PDBSI").src="icons/PDIcon3.png";
}


document.getElementById("FEDBSI").addEventListener("mouseover", FEDBSIOn);
document.getElementById("FEDBSI").addEventListener("mouseout", FEDBSIOff);
function FEDBSIOn(){
  document.getElementById("FEDBSI").src="icons/FEDIcon.png";
}
function FEDBSIOff(){
  document.getElementById("FEDBSI").src="icons/FEDIcon3.png";
}


document.getElementById("WDBSI").addEventListener("mouseover", WDBSIOn);
document.getElementById("WDBSI").addEventListener("mouseout", WDBSIOff);
function WDBSIOn(){
  document.getElementById("WDBSI").src="icons/WDIcon.png";
}
function WDBSIOff(){
  document.getElementById("WDBSI").src="icons/WDIcon3.png";
}

//STEP ON POVERTY CARD ICONS

document.getElementById("GDSOP").addEventListener("mouseover", GDSOPOn);
document.getElementById("GDSOP").addEventListener("mouseout", GDSOPOff);
function GDSOPOn(){
  document.getElementById("GDSOP").src="icons/GDIcon.png";
}
function GDSOPOff(){
  document.getElementById("GDSOP").src="icons/GDIcon3.png";
}


document.getElementById("WDSOP").addEventListener("mouseover", WDSOPOn);
document.getElementById("WDSOP").addEventListener("mouseout", WDSOPOff);
function WDSOPOn(){
  document.getElementById("WDSOP").src="icons/WDIcon.png";
}
function WDSOPOff(){
  document.getElementById("WDSOP").src="icons/WDIcon3.png";
}

//LOVE.FÚTBOL CARD ICONS

document.getElementById("GDLF").addEventListener("mouseover", GDLFOn);
document.getElementById("GDLF").addEventListener("mouseout", GDLFOff);
function GDLFOn(){
  document.getElementById("GDLF").src="icons/GDIcon.png";
}
function GDLFOff(){
  document.getElementById("GDLF").src="icons/GDIcon3.png";
}


document.getElementById("PDLF").addEventListener("mouseover", PDLFOn);
document.getElementById("PDLF").addEventListener("mouseout", PDLFOff);
function PDLFOn(){
  document.getElementById("PDLF").src="icons/PDIcon.png";
}
function PDLFOff(){
  document.getElementById("PDLF").src="icons/PDIcon3.png";
}

//TROY CIVIC CENTER CARD ICONS

document.getElementById("GDTCC").addEventListener("mouseover", GDTCCOn);
document.getElementById("GDTCC").addEventListener("mouseout", GDTCCOff);
function GDTCCOn(){
  document.getElementById("GDTCC").src="icons/GDIcon.png";
}
function GDTCCOff(){
  document.getElementById("GDTCC").src="icons/GDIcon3.png";
}


document.getElementById("WDTCC").addEventListener("mouseover", WDTCCOn);
document.getElementById("WDTCC").addEventListener("mouseout", WDTCCOff);
function WDTCCOn(){
  document.getElementById("WDTCC").src="icons/WDIcon.png";
}
function WDTCCOff(){
  document.getElementById("WDTCC").src="icons/WDIcon3.png";
}

//SAMI'S ENGRAVINGS AND GIFTS CARD ICONS

document.getElementById("GDSami").addEventListener("mouseover", GDSamiOn);
document.getElementById("GDSami").addEventListener("mouseout", GDSamiOff);
function GDSamiOn(){
  document.getElementById("GDSami").src="icons/GDIcon.png";
}
function GDSamiOff(){
  document.getElementById("GDSami").src="icons/GDIcon3.png";
}


document.getElementById("WDSami").addEventListener("mouseover", WDSamiOn);
document.getElementById("WDSami").addEventListener("mouseout", WDSamiOff);
function WDSamiOn(){
  document.getElementById("WDSami").src="icons/WDIcon.png";
}
function WDSamiOff(){
  document.getElementById("WDSami").src="icons/WDIcon3.png";
}

//FILIPINO AMERICAN STUDENT ASSOCIATION CARD ICONS

document.getElementById("GDFASA").addEventListener("mouseover", GDFASAOn);
document.getElementById("GDFASA").addEventListener("mouseout", GDFASAOff);
function GDFASAOn(){
  document.getElementById("GDFASA").src="icons/GDIcon.png";
}
function GDFASAOff(){
  document.getElementById("GDFASA").src="icons/GDIcon3.png";
}

//WEST QUADRANGLE CARD ICONS

document.getElementById("GDWQ").addEventListener("mouseover", GDWQOn);
document.getElementById("GDWQ").addEventListener("mouseout", GDWQOff);
function GDWQOn(){
  document.getElementById("GDWQ").src="icons/GDIcon.png";
}
function GDWQOff(){
  document.getElementById("GDWQ").src="icons/GDIcon3.png";
}

//E.A.T. BAITS CARD ICONS

document.getElementById("GDEAT").addEventListener("mouseover", GDEATOn);
document.getElementById("GDEAT").addEventListener("mouseout", GDEATOff);
function GDEATOn(){
  document.getElementById("GDEAT").src="icons/GDIcon.png";
}
function GDEATOff(){
  document.getElementById("GDEAT").src="icons/GDIcon3.png";
}

//WHAT WERE YOU THINKING? CARD ICONS

document.getElementById("GDWWYT").addEventListener("mouseover", GDWWYTOn);
document.getElementById("GDWWYT").addEventListener("mouseout", GDWWYTOff);
function GDWWYTOn(){
  document.getElementById("GDWWYT").src="icons/GDIcon.png";
}
function GDWWYTOff(){
  document.getElementById("GDWWYT").src="icons/GDIcon3.png";
}

//ELECTIVE STUDIOS CARD ICONS

document.getElementById("GDES").addEventListener("mouseover", GDESOn);
document.getElementById("GDES").addEventListener("mouseout", GDESOff);
function GDESOn(){
  document.getElementById("GDES").src="icons/GDIcon.png";
}
function GDESOff(){
  document.getElementById("GDES").src="icons/GDIcon3.png";
}

//SOLAR CAR CARD ICONS

document.getElementById("GDSC").addEventListener("mouseover", GDSCOn);
document.getElementById("GDSC").addEventListener("mouseout", GDSCOff);
function GDSCOn(){
  document.getElementById("GDSC").src="icons/GDIcon.png";
}
function GDSCOff(){
  document.getElementById("GDSC").src="icons/GDIcon3.png";
}

//RPD ADVISORS CARD ICONS

document.getElementById("GDRPD").addEventListener("mouseover", GDRPDOn);
document.getElementById("GDRPD").addEventListener("mouseout", GDRPDOff);
function GDRPDOn(){
  document.getElementById("GDRPD").src="icons/GDIcon.png";
}
function GDRPDOff(){
  document.getElementById("GDRPD").src="icons/GDIcon3.png";
}

//ORB THUMBNAIL

document.getElementById("Orb").addEventListener("mouseover", OrbOn);
document.getElementById("Orb").addEventListener("mouseout", OrbOff);

function OrbOn(){
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function OrbOff(){
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//PERKSPOT THUMBNAIL

document.getElementById("PS").addEventListener("mouseover", PSOn);
document.getElementById("PS").addEventListener("mouseout", PSOff);

function PSOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function PSOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//MICHIGAN FISHING THUMBNAIL

document.getElementById("MF").addEventListener("mouseover", MFOn);
document.getElementById("MF").addEventListener("mouseout", MFOff);

function MFOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function MFOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//BIBLICAL STUDIES INSTITUTE THUMBNAIL

document.getElementById("BSI").addEventListener("mouseover", BSIOn);
document.getElementById("BSI").addEventListener("mouseout", BSIOff);

function BSIOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function BSIOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//STEP ON POVERTY THUMBNAIL

document.getElementById("SOP").addEventListener("mouseover", SOPOn);
document.getElementById("SOP").addEventListener("mouseout", SOPOff);

function SOPOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function SOPOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//LOVE FÚTBOL THUMBNAIL

document.getElementById("LF").addEventListener("mouseover", LFOn);
document.getElementById("LF").addEventListener("mouseout", LFOff);

function LFOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function LFOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//TROY CIVIC CENTER THUMBNAIL

document.getElementById("TCC").addEventListener("mouseover", TCCOn);
document.getElementById("TCC").addEventListener("mouseout", TCCOff);

function TCCOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function TCCOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//SAMI'S ENGRAVINGS AND GIFTS THUMBNAIL

document.getElementById("Sami").addEventListener("mouseover", SamiOn);
document.getElementById("Sami").addEventListener("mouseout", SamiOff);

function SamiOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function SamiOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//FILIPINO AMERICAN STUDENT ASSOCIATION THUMBNAIL

document.getElementById("FASA").addEventListener("mouseover", FASAOn);
document.getElementById("FASA").addEventListener("mouseout", FASAOff);

function FASAOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function FASAOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//WEST QUADRANGLE THUMBNAIL

document.getElementById("WQ").addEventListener("mouseover", WQOn);
document.getElementById("WQ").addEventListener("mouseout", WQOff);

function WQOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function WQOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//E.A.T. BAITS THUMBNAIL

document.getElementById("EAT").addEventListener("mouseover", EATOn);
document.getElementById("EAT").addEventListener("mouseout", EATOff);

function EATOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function EATOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WWYTThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}

//WHAT WERE YOU THINKING? THUMBNAIL

document.getElementById("WWYT").addEventListener("mouseover", WWYTOn);
document.getElementById("WWYT").addEventListener("mouseout", WWYTOff);

function WWYTOn(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(100%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(100%)";
}

function WWYTOff(){
  document.getElementById("OrbThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("PSThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("MFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("BSIThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SOPThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("LFThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("TCCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SamiThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("FASAThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("WQThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("EATThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("ESThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("SCThumbnail").style.filter = "grayscale(0%)";
  document.getElementById("RPDThumbnail").style.filter = "grayscale(0%)";
}
