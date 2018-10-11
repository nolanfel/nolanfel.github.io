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

//MICHIGAN DAILY CARD ICONS

document.getElementById("GDMD").addEventListener("mouseover", GDMDOn);
document.getElementById("GDMD").addEventListener("mouseout", GDMDOff);
function GDMDOn(){
  document.getElementById("GDMD").src="icons/GDIcon.png";
}
function GDMDOff(){
  document.getElementById("GDMD").src="icons/GDIcon3.png";
}

//CMYK DESIGN CARD ICONS

document.getElementById("GDCMYK").addEventListener("mouseover", GDCMYKOn);
document.getElementById("GDCMYK").addEventListener("mouseout", GDCMYKOff);
function GDCMYKOn(){
  document.getElementById("GDCMYK").src="icons/GDIcon.png";
}
function GDCMYKOff(){
  document.getElementById("GDCMYK").src="icons/GDIcon3.png";
}

//EFFECTIVE ALTRUISM CARD ICONS

document.getElementById("GDEA").addEventListener("mouseover", GDEAOn);
document.getElementById("GDEA").addEventListener("mouseout", GDEAOff);
function GDEAOn(){
  document.getElementById("GDEA").src="icons/GDIcon.png";
}
function GDEAOff(){
  document.getElementById("GDEA").src="icons/GDIcon3.png";
}




//ORB MODAL ICONS

document.getElementById("ModalGDOrb").addEventListener("mouseover", ModalGDOrbOn);
document.getElementById("ModalGDOrb").addEventListener("mouseout", ModalGDOrbOff);
function ModalGDOrbOn(){
  document.getElementById("ModalGDOrb").src="icons/GDIcon.png";
}
function ModalGDOrbOff(){
  document.getElementById("ModalGDOrb").src="icons/GDIcon3.png";
}

document.getElementById("ModalPDOrb").addEventListener("mouseover", ModalPDOrbOn);
document.getElementById("ModalPDOrb").addEventListener("mouseout", ModalPDOrbOff);
function ModalPDOrbOn(){
  document.getElementById("ModalPDOrb").src="icons/PDIcon.png";
}
function ModalPDOrbOff(){
  document.getElementById("ModalPDOrb").src="icons/PDIcon3.png";
}

document.getElementById("ModalFEDOrb").addEventListener("mouseover", ModalFEDOrbOn);
document.getElementById("ModalFEDOrb").addEventListener("mouseout", ModalFEDOrbOff);
function ModalFEDOrbOn(){
  document.getElementById("ModalFEDOrb").src="icons/FEDIcon.png";
}
function ModalFEDOrbOff(){
  document.getElementById("ModalFEDOrb").src="icons/FEDIcon3.png";
}

document.getElementById("ModalWDOrb").addEventListener("mouseover", ModalWDOrbOn);
document.getElementById("ModalWDOrb").addEventListener("mouseout", ModalWDOrbOff);
function ModalWDOrbOn(){
  document.getElementById("ModalWDOrb").src="icons/WDIcon.png";
}
function ModalWDOrbOff(){
  document.getElementById("ModalWDOrb").src="icons/WDIcon3.png";
}

//PERKSPOT MODAL ICONS

document.getElementById("ModalGDPerkSpot").addEventListener("mouseover", ModalGDPerkSpotOn);
document.getElementById("ModalGDPerkSpot").addEventListener("mouseout", ModalGDPerkSpotOff);
function ModalGDPerkSpotOn(){
  document.getElementById("ModalGDPerkSpot").src="icons/GDIcon.png";
}
function ModalGDPerkSpotOff(){
  document.getElementById("ModalGDPerkSpot").src="icons/GDIcon3.png";
}

document.getElementById("ModalPDPerkSpot").addEventListener("mouseover", ModalPDPerkSpotOn);
document.getElementById("ModalPDPerkSpot").addEventListener("mouseout", ModalPDPerkSpotOff);
function ModalPDPerkSpotOn(){
  document.getElementById("ModalPDPerkSpot").src="icons/PDIcon.png";
}
function ModalPDPerkSpotOff(){
  document.getElementById("ModalPDPerkSpot").src="icons/PDIcon3.png";
}

document.getElementById("ModalFEDPerkSpot").addEventListener("mouseover", ModalFEDPerkSpotOn);
document.getElementById("ModalFEDPerkSpot").addEventListener("mouseout", ModalFEDPerkSpotOff);
function ModalFEDPerkSpotOn(){
  document.getElementById("ModalFEDPerkSpot").src="icons/FEDIcon.png";
}
function ModalFEDPerkSpotOff(){
  document.getElementById("ModalFEDPerkSpot").src="icons/FEDIcon3.png";
}

document.getElementById("ModalWDPerkSpot").addEventListener("mouseover", ModalWDPerkSpotOn);
document.getElementById("ModalWDPerkSpot").addEventListener("mouseout", ModalWDPerkSpotOff);
function ModalWDPerkSpotOn(){
  document.getElementById("ModalWDPerkSpot").src="icons/WDIcon.png";
}
function ModalWDPerkSpotOff(){
  document.getElementById("ModalWDPerkSpot").src="icons/WDIcon3.png";
}

// MICHIGAN FISHING MODAL ICONS

document.getElementById("ModalGDMichiganFishing").addEventListener("mouseover", ModalGDMichiganFishingOn);
document.getElementById("ModalGDMichiganFishing").addEventListener("mouseout", ModalGDMichiganFishingOff);
function ModalGDMichiganFishingOn(){
  document.getElementById("ModalGDMichiganFishing").src="icons/GDIcon.png";
}
function ModalGDMichiganFishingOff(){
  document.getElementById("ModalGDMichiganFishing").src="icons/GDIcon3.png";
}


document.getElementById("ModalPDMichiganFishing").addEventListener("mouseover", ModalPDMichiganFishingOn);
document.getElementById("ModalPDMichiganFishing").addEventListener("mouseout", ModalPDMichiganFishingOff);
function ModalPDMichiganFishingOn(){
  document.getElementById("ModalPDMichiganFishing").src="icons/PDIcon.png";
}
function ModalPDMichiganFishingOff(){
  document.getElementById("ModalPDMichiganFishing").src="icons/PDIcon3.png";
}


document.getElementById("ModalWDMichiganFishing").addEventListener("mouseover", ModalWDMichiganFishingOn);
document.getElementById("ModalWDMichiganFishing").addEventListener("mouseout", ModalWDMichiganFishingOff);
function ModalWDMichiganFishingOn(){
  document.getElementById("ModalWDMichiganFishing").src="icons/WDIcon.png";
}
function ModalWDMichiganFishingOff(){
  document.getElementById("ModalWDMichiganFishing").src="icons/WDIcon3.png";
}

//BIBLICAL STUDIES INSTITUTE MODAL ICONS

document.getElementById("ModalGDBSI").addEventListener("mouseover", ModalGDBSIOn);
document.getElementById("ModalGDBSI").addEventListener("mouseout", ModalGDBSIOff);
function ModalGDBSIOn(){
  document.getElementById("ModalGDBSI").src="icons/GDIcon.png";
}
function ModalGDBSIOff(){
  document.getElementById("ModalGDBSI").src="icons/GDIcon3.png";
}


document.getElementById("ModalPDBSI").addEventListener("mouseover", ModalPDBSIOn);
document.getElementById("ModalPDBSI").addEventListener("mouseout", ModalPDBSIOff);
function ModalPDBSIOn(){
  document.getElementById("ModalPDBSI").src="icons/PDIcon.png";
}
function ModalPDBSIOff(){
  document.getElementById("ModalPDBSI").src="icons/PDIcon3.png";
}


document.getElementById("ModalFEDBSI").addEventListener("mouseover", ModalFEDBSIOn);
document.getElementById("ModalFEDBSI").addEventListener("mouseout", ModalFEDBSIOff);
function ModalFEDBSIOn(){
  document.getElementById("ModalFEDBSI").src="icons/FEDIcon.png";
}
function ModalFEDBSIOff(){
  document.getElementById("ModalFEDBSI").src="icons/FEDIcon3.png";
}


document.getElementById("ModalWDBSI").addEventListener("mouseover", ModalWDBSIOn);
document.getElementById("ModalWDBSI").addEventListener("mouseout", ModalWDBSIOff);
function ModalWDBSIOn(){
  document.getElementById("ModalWDBSI").src="icons/WDIcon.png";
}
function ModalWDBSIOff(){
  document.getElementById("ModalWDBSI").src="icons/WDIcon3.png";
}

//STEP ON POVERTY MODAL ICONS

document.getElementById("ModalGDSOP").addEventListener("mouseover", ModalGDSOPOn);
document.getElementById("ModalGDSOP").addEventListener("mouseout", ModalGDSOPOff);
function ModalGDSOPOn(){
  document.getElementById("ModalGDSOP").src="icons/GDIcon.png";
}
function ModalGDSOPOff(){
  document.getElementById("ModalGDSOP").src="icons/GDIcon3.png";
}


document.getElementById("ModalWDSOP").addEventListener("mouseover", ModalWDSOPOn);
document.getElementById("ModalWDSOP").addEventListener("mouseout", ModalWDSOPOff);
function ModalWDSOPOn(){
  document.getElementById("ModalWDSOP").src="icons/WDIcon.png";
}
function ModalWDSOPOff(){
  document.getElementById("ModalWDSOP").src="icons/WDIcon3.png";
}

//LOVE.FÚTBOL MODAL ICONS

document.getElementById("ModalGDLF").addEventListener("mouseover", ModalGDLFOn);
document.getElementById("ModalGDLF").addEventListener("mouseout", ModalGDLFOff);
function ModalGDLFOn(){
  document.getElementById("ModalGDLF").src="icons/GDIcon.png";
}
function ModalGDLFOff(){
  document.getElementById("ModalGDLF").src="icons/GDIcon3.png";
}


document.getElementById("ModalPDLF").addEventListener("mouseover", ModalPDLFOn);
document.getElementById("ModalPDLF").addEventListener("mouseout", ModalPDLFOff);
function ModalPDLFOn(){
  document.getElementById("ModalPDLF").src="icons/PDIcon.png";
}
function ModalPDLFOff(){
  document.getElementById("ModalPDLF").src="icons/PDIcon3.png";
}

//TROY CIVIC CENTER MODAL ICONS

document.getElementById("ModalGDTCC").addEventListener("mouseover", ModalGDTCCOn);
document.getElementById("ModalGDTCC").addEventListener("mouseout", ModalGDTCCOff);
function ModalGDTCCOn(){
  document.getElementById("ModalGDTCC").src="icons/GDIcon.png";
}
function ModalGDTCCOff(){
  document.getElementById("ModalGDTCC").src="icons/GDIcon3.png";
}


document.getElementById("ModalWDTCC").addEventListener("mouseover", ModalWDTCCOn);
document.getElementById("ModalWDTCC").addEventListener("mouseout", ModalWDTCCOff);
function ModalWDTCCOn(){
  document.getElementById("ModalWDTCC").src="icons/WDIcon.png";
}
function ModalWDTCCOff(){
  document.getElementById("ModalWDTCC").src="icons/WDIcon3.png";
}

//SAMI'S ENGRAVINGS AND GIFTS MODAL ICONS

document.getElementById("ModalGDSami").addEventListener("mouseover", ModalGDSamiOn);
document.getElementById("ModalGDSami").addEventListener("mouseout", ModalGDSamiOff);
function ModalGDSamiOn(){
  document.getElementById("ModalGDSami").src="icons/GDIcon.png";
}
function ModalGDSamiOff(){
  document.getElementById("ModalGDSami").src="icons/GDIcon3.png";
}


document.getElementById("ModalWDSami").addEventListener("mouseover", ModalWDSamiOn);
document.getElementById("ModalWDSami").addEventListener("mouseout", ModalWDSamiOff);
function ModalWDSamiOn(){
  document.getElementById("ModalWDSami").src="icons/WDIcon.png";
}
function ModalWDSamiOff(){
  document.getElementById("ModalWDSami").src="icons/WDIcon3.png";
}

//FILIPINO AMERICAN STUDENT ASSOCIATION MODAL ICONS

document.getElementById("ModalGDFASA").addEventListener("mouseover", ModalGDFASAOn);
document.getElementById("ModalGDFASA").addEventListener("mouseout", ModalGDFASAOff);
function ModalGDFASAOn(){
  document.getElementById("ModalGDFASA").src="icons/GDIcon.png";
}
function ModalGDFASAOff(){
  document.getElementById("ModalGDFASA").src="icons/GDIcon3.png";
}

//WEST QUADRANGLE MODAL ICONS

document.getElementById("ModalGDWQ").addEventListener("mouseover", ModalGDWQOn);
document.getElementById("ModalGDWQ").addEventListener("mouseout", ModalGDWQOff);
function ModalGDWQOn(){
  document.getElementById("ModalGDWQ").src="icons/GDIcon.png";
}
function ModalGDWQOff(){
  document.getElementById("ModalGDWQ").src="icons/GDIcon3.png";
}

//E.A.T. BAITS MODAL ICONS

document.getElementById("ModalGDEAT").addEventListener("mouseover", ModalGDEATOn);
document.getElementById("ModalGDEAT").addEventListener("mouseout", ModalGDEATOff);
function ModalGDEATOn(){
  document.getElementById("ModalGDEAT").src="icons/GDIcon.png";
}
function ModalGDEATOff(){
  document.getElementById("ModalGDEAT").src="icons/GDIcon3.png";
}

//WHAT WERE YOU THINKING? MODAL ICONS

document.getElementById("ModalGDWWYT").addEventListener("mouseover", ModalGDWWYTOn);
document.getElementById("ModalGDWWYT").addEventListener("mouseout", ModalGDWWYTOff);
function ModalGDWWYTOn(){
  document.getElementById("ModalGDWWYT").src="icons/GDIcon.png";
}
function ModalGDWWYTOff(){
  document.getElementById("ModalGDWWYT").src="icons/GDIcon3.png";
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


//ORB MODAL NAV

document.getElementById("OrbChrome").addEventListener("click", OrbChrome);
document.getElementById("OrbLogos").addEventListener("click", OrbLogos);

function OrbChrome() {

  document.getElementById("carouselOrbModal").style.display="block";
  document.getElementById("carouselOrbModal2").style.display="none";
  document.getElementById("OrbChrome").style.color="#1E90FF";
  document.getElementById("OrbLogos").style.color="#747d8c";

}

function OrbLogos() {

  document.getElementById("carouselOrbModal").style.display="none";
  document.getElementById("carouselOrbModal2").style.display="block";
  document.getElementById("OrbChrome").style.color="#747d8c";
  document.getElementById("OrbLogos").style.color="#1E90FF";

}

//PERKSPOT MODAL NAV

document.getElementById("PSChrome").addEventListener("click", PSChrome);
document.getElementById("PSMiscellaneous").addEventListener("click", PSMiscellaneous);

function PSChrome() {

  document.getElementById("carouselPerkSpotModal").style.display="block";
  document.getElementById("carouselPerkSpotModal2").style.display="none";
  document.getElementById("PSChrome").style.color="#5590af";
  document.getElementById("PSMiscellaneous").style.color="#747d8c";

}

function PSMiscellaneous() {

  document.getElementById("carouselPerkSpotModal").style.display="none";
  document.getElementById("carouselPerkSpotModal2").style.display="block";
  document.getElementById("PSChrome").style.color="#747d8c";
  document.getElementById("PSMiscellaneous").style.color="#5590af";

}

//BIBLICAL STUDIES INSTITUTE MODAL NAV

document.getElementById("MFLogos").addEventListener("click", MFLogos);
document.getElementById("MFProducts").addEventListener("click", MFProducts);
document.getElementById("MFWebsite").addEventListener("click", MFWebsite);
document.getElementById("MFMiscellaneous").addEventListener("click", MFMiscellaneous);

function MFLogos() {

  document.getElementById("carouselMichiganFishingModal").style.display="block";
  document.getElementById("carouselMichiganFishingModal2").style.display="none";
  document.getElementById("carouselMichiganFishingModal3").style.display="none";
  document.getElementById("carouselMichiganFishingModal4").style.display="none";
  document.getElementById("MFLogos").style.color="#FEBF13";
  document.getElementById("MFProducts").style.color="#747d8c";
  document.getElementById("MFWebsite").style.color="#747d8c";
  document.getElementById("MFMiscellaneous").style.color="#747d8c";

}

function MFProducts() {

  document.getElementById("carouselMichiganFishingModal").style.display="none";
  document.getElementById("carouselMichiganFishingModal2").style.display="block";
  document.getElementById("carouselMichiganFishingModal3").style.display="none";
  document.getElementById("carouselMichiganFishingModal4").style.display="none";
  document.getElementById("MFLogos").style.color="#747d8c";
  document.getElementById("MFProducts").style.color="#FEBF13";
  document.getElementById("MFWebsite").style.color="#747d8c";
  document.getElementById("MFMiscellaneous").style.color="#747d8c";

}

function MFWebsite() {

  document.getElementById("carouselMichiganFishingModal").style.display="none";
  document.getElementById("carouselMichiganFishingModal2").style.display="none";
  document.getElementById("carouselMichiganFishingModal3").style.display="block";
  document.getElementById("carouselMichiganFishingModal4").style.display="none";
  document.getElementById("MFLogos").style.color="#747d8c";
  document.getElementById("MFProducts").style.color="#747d8c";
  document.getElementById("MFWebsite").style.color="#FEBF13";
  document.getElementById("MFMiscellaneous").style.color="#747d8c";

}

function MFMiscellaneous() {

  document.getElementById("carouselMichiganFishingModal").style.display="none";
  document.getElementById("carouselMichiganFishingModal2").style.display="none";
  document.getElementById("carouselMichiganFishingModal3").style.display="none";
  document.getElementById("carouselMichiganFishingModal4").style.display="block";
  document.getElementById("MFLogos").style.color="#747d8c";
  document.getElementById("MFProducts").style.color="#747d8c";
  document.getElementById("MFWebsite").style.color="#747d8c";
  document.getElementById("MFMiscellaneous").style.color="#FEBF13";

}

//BIBLICAL STUDIES INSTITUTE MODAL NAV

document.getElementById("BSIChrome").addEventListener("click", BSIChrome);
document.getElementById("BSILogos").addEventListener("click", BSILogos);
document.getElementById("BSIWebsite").addEventListener("click", BSIWebsite);

function BSIChrome() {

  document.getElementById("carouselBSIModal").style.display="block";
  document.getElementById("carouselBSIModal2").style.display="none";
  document.getElementById("carouselBSIModal3").style.display="none";
  document.getElementById("BSIChrome").style.color="#6c5ce7";
  document.getElementById("BSILogos").style.color="#747d8c";
  document.getElementById("BSIWebsite").style.color="#747d8c";

}

function BSILogos() {

  document.getElementById("carouselBSIModal").style.display="none";
  document.getElementById("carouselBSIModal2").style.display="block";
  document.getElementById("carouselBSIModal3").style.display="none";
  document.getElementById("BSIChrome").style.color="#747d8c";
  document.getElementById("BSILogos").style.color="#6c5ce7";
  document.getElementById("BSIWebsite").style.color="#747d8c";

}

function BSIWebsite() {

  document.getElementById("carouselBSIModal").style.display="none";
  document.getElementById("carouselBSIModal2").style.display="none";
  document.getElementById("carouselBSIModal3").style.display="block";
  document.getElementById("BSIChrome").style.color="#747d8c";
  document.getElementById("BSILogos").style.color="#747d8c";
  document.getElementById("BSIWebsite").style.color="#6c5ce7";

}

//STEP ON POVERTY MODAL NAV

document.getElementById("SOPLogos").addEventListener("click", SOPLogos);
document.getElementById("SOPFliers").addEventListener("click", SOPFliers);
document.getElementById("SOPWebsite").addEventListener("click", SOPWebsite);
document.getElementById("SOPMiscellaneous").addEventListener("click", SOPMiscellaneous);

function SOPLogos() {

  document.getElementById("carouselSOPModal").style.display="block";
  document.getElementById("carouselSOPModal3").style.display="none";
  document.getElementById("carouselSOPModal4").style.display="none";
  document.getElementById("carouselSOPModal5").style.display="none";
  document.getElementById("SOPLogos").style.color="#1193F5";
  document.getElementById("SOPFliers").style.color="#747d8c";
  document.getElementById("SOPWebsite").style.color="#747d8c";
  document.getElementById("SOPMiscellaneous").style.color="#747d8c";

}

function SOPFliers() {

  document.getElementById("carouselSOPModal").style.display="none";
  document.getElementById("carouselSOPModal3").style.display="none";
  document.getElementById("carouselSOPModal4").style.display="block";
  document.getElementById("carouselSOPModal5").style.display="none";
  document.getElementById("SOPLogos").style.color="#747d8c";
  document.getElementById("SOPFliers").style.color="#1193F5";
  document.getElementById("SOPWebsite").style.color="#747d8c";
  document.getElementById("SOPMiscellaneous").style.color="#747d8c";

}

function SOPWebsite() {

  document.getElementById("carouselSOPModal").style.display="none";
  document.getElementById("carouselSOPModal3").style.display="block";
  document.getElementById("carouselSOPModal4").style.display="none";
  document.getElementById("carouselSOPModal5").style.display="none";
  document.getElementById("SOPLogos").style.color="#747d8c";
  document.getElementById("SOPFliers").style.color="#747d8c";
  document.getElementById("SOPWebsite").style.color="#1193F5";
  document.getElementById("SOPMiscellaneous").style.color="#747d8c";

}

function SOPMiscellaneous() {

  document.getElementById("carouselSOPModal").style.display="none";
  document.getElementById("carouselSOPModal3").style.display="none";
  document.getElementById("carouselSOPModal4").style.display="none";
  document.getElementById("carouselSOPModal5").style.display="block";
  document.getElementById("SOPLogos").style.color="#747d8c";
  document.getElementById("SOPFliers").style.color="#747d8c";
  document.getElementById("SOPWebsite").style.color="#747d8c";
  document.getElementById("SOPMiscellaneous").style.color="#1193F5";

}

//SAMI MODAL NAV

document.getElementById("SamiWebsite").addEventListener("click", SamiWebsite);
document.getElementById("SamiLogos").addEventListener("click", SamiLogos);

function SamiWebsite() {

  document.getElementById("carouselSamiModal").style.display="block";
  document.getElementById("carouselSamiModal2").style.display="none";
  document.getElementById("SamiWebsite").style.color="#E64B3B";
  document.getElementById("SamiLogos").style.color="#747d8c";

}

function SamiLogos() {

  document.getElementById("carouselSamiModal").style.display="none";
  document.getElementById("carouselSamiModal2").style.display="block";
  document.getElementById("SamiWebsite").style.color="#747d8c";
  document.getElementById("SamiLogos").style.color="#E64B3B";

}
