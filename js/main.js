var doc = new jsPDF('p', 'mm', 'a4');
doc.addImage(form, 'JPEG', 0, 0, 210, 297);
doc.setFont("courier");
doc.setFontSize(10);
doc.text('NAMENAMENAMENAME', 12, 66); //Name
doc.text('AGEAG', 58, 66.5); //Age
doc.setFontSize(9);
doc.text('DD/MM/YYYY', 55, 73.5); //DOB
doc.setFontSize(10);
doc.rect(86.35, 58, 2, 2, 'F'); //Male
doc.rect(95.5, 58, 2, 2, 'F'); //Female
doc.text('WTG', 89, 69); //Weight
doc.text('DD/MM/YYYY', 65, 83); //ReactionStart
doc.text('DD/MM/YYYY', 65, 88); //ReactionEnd
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 96); //DescriptionLine1
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 99); //DescriptionLine2
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 102); //DescriptionLine3
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 105); //DescriptionLine4
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 108); //DescriptionLine5
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 111); //DescriptionLine6
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 114); //DescriptionLine7
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 117); //DescriptionLine8
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 120); //DescriptionLine9
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 123); //DescriptionLine10
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 126); //DescriptionLine11
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 129); //DescriptionLine12
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 132); //DescriptionLine13
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 135); //DescriptionLine14
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 138); //DescriptionLine15
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 141); //DescriptionLine16
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 144); //DescriptionLine17
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 147); //DescriptionLine18
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 150); //DescriptionLine19
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 153); //DescriptionLine20
doc.text('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 12, 156); //DescriptionLine21
doc.text('NAME NAME', 17, 181); //MedicationName1Line1
doc.text('NAME NAME', 17, 184); //MedicationName1Line2
doc.text('NAME NAME', 17, 190); //MedicationName2Line1
doc.text('NAME NAME', 17, 193); //MedicationName2Line2
doc.text('NAME NAME', 17, 198.5); //MedicationName3Line1
doc.text('NAME NAME', 17, 201.5); //MedicationName3Line2
doc.text('NAME NAME', 17, 206.75); //MedicationName4Line1
doc.text('NAME NAME', 17, 209.75); //MedicationName4Line2
doc.text('MANUFA', 39, 181); //Manufacturer1Line1
doc.text('CTURER', 39, 184); //Manufacturer1Line2
doc.text('MANUFA', 39, 190); //Manufacturer2Line1
doc.text('CTURER', 39, 193); //Manufacturer2Line2
doc.text('MANUFA', 39, 198.5); //Manufacturer3Line1
doc.text('CTURER', 39, 201.5); //Manufacturer3Line2
doc.text('MANUFA', 39, 206.75); //Manufacturer4Line1
doc.text('CTURER', 39, 209.75); //Manufacturer4Line2
doc.text('BATCHB', 54, 181); //Batch1Line1
doc.text('ATCHBA', 54, 184); //Batch1Line2
doc.text('BATCHB', 54, 190); //Batch2Line1
doc.text('ATCHBA', 54, 193); //Batch2Line2
doc.text('BATCHB', 54, 198.5); //Batch3Line1
doc.text('ATCHBA', 54, 201.5); //Batch3Line2
doc.text('BATCHB', 54, 206.75); //Batch4Line1
doc.text('ATCHBA', 54, 209.75); //Batch4Line2
doc.text('DD/MM/', 69, 181); //ExpDate1Line1
doc.text('YYYY', 71, 184); //ExpDate1Line2
doc.text('DD/MM/', 69, 190); //ExpDate2Line1
doc.text('YYYY', 71, 193); //ExpDate2Line2
doc.text('DD/MM/', 69, 198.5); //ExpDate3Line1
doc.text('YYYY', 71, 201.5); //ExpDate3Line2
doc.text('DD/MM/', 69, 206.75); //ExpDate4Line1
doc.text('YYYY', 71, 209.75); //ExpDate4Line2
doc.text('DOSED', 85, 181); //Dose1Line1
doc.text('mg', 88, 184); //Dose1Line2
doc.text('DOSED', 85, 190); //Dose2Line1
doc.text('mg', 88, 193); //Dose2Line2
doc.text('DOSED', 85, 198.5); //Dose3Line1
doc.text('mg', 88, 201.5); //Dose3Line2
doc.text('DOSED', 85, 206.75); //Dose4Line1
doc.text('mg', 88, 209.75); //Dose4Line2
doc.text('ROUTE', 97.25, 181); //Route1Line1
doc.text('ROUTE', 97.25, 184); //Route1Line2
doc.text('ROUTE', 97.25, 190); //Route2Line1
doc.text('ROUTE', 97.25, 193); //Route2Line2
doc.text('ROUTE', 97.25, 198.5); //Route3Line1
doc.text('ROUTE', 97.25, 201.5); //Route3Line2
doc.text('ROUTE', 97.25, 206.75); //Route4Line1
doc.text('ROUTE', 97.25, 209.75); //Route4Line2
doc.text('FREQUEN', 109.5, 181); //Frequency1Line1
doc.text('FREQUEN', 109.5, 184); //Frequency1Line2
doc.text('FREQUEN', 109.5, 190); //Frequency2Line1
doc.text('FREQUEN', 109.5, 193); //Frequency2Line2
doc.text('FREQUEN', 109.5, 198.5); //Frequency3Line1
doc.text('FREQUEN', 109.5, 201.5); //Frequency3Line2
doc.text('FREQUEN', 109.5, 206.75); //Frequency4Line1
doc.text('FREQUEN', 109.5, 209.75); //Frequency4Line2
doc.text('DD/MM/', 129, 181); //TherapyStart1Line1
doc.text('YYYY', 131, 184); //TherapyStart1Line2
doc.text('DD/MM/', 129, 190); //TherapyStart2Line1
doc.text('YYYY', 131, 193); //TherapyStart2Line2
doc.text('DD/MM/', 129, 198.5); //TherapyStart3Line1
doc.text('YYYY', 131, 201.5); //TherapyStart3Line2
doc.text('DD/MM/', 129, 206.75); //TherapyStart4Line1
doc.text('YYYY', 131, 209.75); //TherapyStart4Line2
doc.text('DD/MM/', 149, 181); //TherapyEnd1Line1
doc.text('YYYY', 151, 184); //TherapyEnd1Line2
doc.text('DD/MM/', 149, 190); //TherapyEnd2Line1
doc.text('YYYY', 151, 193); //TherapyEnd2Line2
doc.text('DD/MM/', 149, 198.5); //TherapyEnd3Line1
doc.text('YYYY', 151, 201.5); //TherapyEnd3Line2
doc.text('DD/MM/', 149, 206.75); //TherapyEnd4Line1
doc.text('YYYY', 151, 209.75); //TherapyEnd4Line2
doc.text('REASONREASONREA', 167.5, 181); //Reason1Line1
doc.text('REASONREASONREA', 167.5, 184); //Reason1Line2
doc.text('REASONREASONREA', 167.5, 190); //Reason2Line1
doc.text('REASONREASONREA', 167.5, 193); //Reason2Line2
doc.text('REASONREASONREA', 167.5, 198.5); //Reason3Line1
doc.text('REASONREASONREA', 167.5, 201.5); //Reason3Line2
doc.text('REASONREASONREA', 167.5, 206.75); //Reason4Line1
doc.text('REASONREASONREA', 167.5, 209.75); //Reason4Line2
doc.addImage(tick, 'PNG', 31, 219.25, 4, 4); //ReactionAbated1Yes
doc.addImage(tick, 'PNG', 46, 219.25, 4, 4); //ReactionAbated1No
doc.addImage(tick, 'PNG', 62, 219.25, 4, 4); //ReactionAbated1Unknown
doc.addImage(tick, 'PNG', 77, 219.25, 4, 4); //ReactionAbated1NA
doc.text('REDCD mg', 91, 222.25); //ReactionAbated1ReducedDose
doc.addImage(tick, 'PNG', 31, 223.25, 4, 4); //ReactionAbated2Yes
doc.addImage(tick, 'PNG', 46, 223.25, 4, 4); //ReactionAbated2No
doc.addImage(tick, 'PNG', 62, 223.25, 4, 4); //ReactionAbated2Unknown
doc.addImage(tick, 'PNG', 77, 223.25, 4, 4); //ReactionAbated2NA
doc.text('REDCD mg', 91, 226.25); //ReactionAbated2ReducedDose
doc.addImage(tick, 'PNG', 31, 227.5, 4, 4); //ReactionAbated3Yes
doc.addImage(tick, 'PNG', 46, 227.5, 4, 4); //ReactionAbated3No
doc.addImage(tick, 'PNG', 62, 227.5, 4, 4); //ReactionAbated3Unknown
doc.addImage(tick, 'PNG', 77, 227.5, 4, 4); //ReactionAbated3NA
doc.text('REDCD mg', 91, 230.5); //ReactionAbated3ReducedDose
doc.addImage(tick, 'PNG', 31, 231.75, 4, 4); //ReactionAbated4Yes
doc.addImage(tick, 'PNG', 46, 231.75, 4, 4); //ReactionAbated4No
doc.addImage(tick, 'PNG', 62, 231.75, 4, 4); //ReactionAbated4Unknown
doc.addImage(tick, 'PNG', 77, 231.75, 4, 4); //ReactionAbated4NA
doc.text('REDCD mg', 91, 234.75); //ReactionAbated4ReducedDose
doc.text('-', 117.5, 222.25); //ReactionReappeared1Yes
doc.text('-', 130.5, 222.25); //ReactionReappeared1No
doc.text('-', 145, 222.25); //ReactionReappeared1Unknown
doc.text('-', 160, 222.25); //ReactionReappeared1NA
doc.text('-', 182, 222.25); //ReactionReappeared1ReintroducedDose
doc.text('-', 117.5, 226.25); //ReactionReappeared2Yes
doc.text('-', 130.5, 226.25); //ReactionReappeared2No
doc.text('-', 145, 226.25); //ReactionReappeared2Unknown
doc.text('-', 160, 226.25); //ReactionReappeared2NA
doc.text('-', 182, 226.25); //ReactionReappeared2ReintroducedDose
doc.text('-', 117.5, 230.5); //ReactionReappeared3Yes
doc.text('-', 130.5, 230.5); //ReactionReappeared3No
doc.text('-', 145, 230.5); //ReactionReappeared3Unknown
doc.text('-', 160, 230.5); //ReactionReappeared3NA
doc.text('-', 182, 230.5); //ReactionReappeared3ReintroducedDose
doc.text('-', 117.5, 234.75); //ReactionReappeared4Yes
doc.text('-', 130.5, 234.75); //ReactionReappeared4No
doc.text('-', 145, 234.75); //ReactionReappeared4Unknown
doc.text('-', 160, 234.75); //ReactionReappeared4NA
doc.text('-', 182, 234.75); //ReactionReappeared4ReintroducedDose
doc.text('NAMENAMENAMENAMENA', 157, 246); //ReporterName
doc.text('ADDRESSADDRESSADDRESSADDRESSADDRESSAD', 116, 250); //ReporterAddressLine1
doc.text('ADDRESSADDRESSADDRESSADDRESSADDRESSAD', 116, 254.5); //ReporterAddressLine2
doc.text('PINPIN', 132, 259); //ReporterPincode
doc.setDrawColor(255);
doc.setLineWidth(2);
doc.line(162, 259, 197, 259);
doc.setFontSize(8);
doc.text('EMAILEMAILEMAILEMAILEL', 161.5, 257.5); //ReporterEmailLine1
doc.text('EMAILEMAILEMAILEMAILEL', 161.5, 259.5); //ReporterEmailLine2
doc.setFontSize(10);
doc.text('PHONEPHONEPHONE', 160, 263.5); //ReporterPhone
doc.text('SPECIALITYSP', 128, 268); //ReporterSpecialityLine1
doc.text('SPECIALITYSP', 128, 271.5); //ReporterSpecialityLine2
doc.text('OCCUPATIONOCCUPATION', 109, 282); //ReporterOccupationLine1
doc.text('OCCUPATIONOCCUPATION', 109, 285.5); //ReporterOccupationLine2
doc.text('DD/MM/YYYY', 164.5, 283.5); //DateOfReport
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 249.5); //ConcomitantLine1
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 252.5); //ConcomitantLine2
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 255.5); //ConcomitantLine3
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 258.5); //ConcomitantLine4
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 261.5); //ConcomitantLine5
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 264.5); //ConcomitantLine6
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 267.5); //ConcomitantLine7
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 270.5); //ConcomitantLine8
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 273.5); //ConcomitantLine9
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 276.5); //ConcomitantLine10
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 279.5); //ConcomitantLine11
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 282.5); //ConcomitantLine12
doc.text('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 12, 285.5); //ConcomitantLine13
doc.text('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT', 109, 58); //TestsLine1
doc.text('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT', 109, 61); //TestsLine2
doc.text('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT', 109, 64); //TestsLine3
doc.text('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT', 109, 67); //TestsLine4
doc.text('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT', 109, 70); //TestsLine5
doc.text('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT', 109, 73); //TestsLine6
doc.text('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT', 109, 76); //TestsLine7
doc.text('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 109, 92.5); //HistoryLine1
doc.text('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 109, 95.5); //HistoryLine2
doc.text('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 109, 98.5); //HistoryLine3
doc.text('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 109, 101.5); //HistoryLine4
doc.text('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 109, 104.5); //HistoryLine5
doc.text('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 109, 107.5); //HistoryLine6
doc.text('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 109, 110.5); //HistoryLine7
doc.text('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 109, 113.5); //HistoryLine8
doc.text('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 109, 116.5); //HistoryLine9
doc.rect(109.8, 124.3, 2, 2, 'F'); //SeriousDeath
doc.text('DD/MM/YYYY', 136, 126.5); //SeriousDeathDate
doc.rect(109.8, 128.25, 2, 2, 'F'); //SeriousLifeThreatening
doc.rect(109.8, 132.25, 2, 2, 'F'); //SeriousHospital
doc.rect(109.8, 139.75, 2, 2, 'F'); //SeriousDisability
doc.rect(158.25, 124.3, 2, 2, 'F'); //SeriousCongenital
doc.rect(158.25, 128.25, 2, 2, 'F'); //SeriousIntervention
doc.rect(158.25, 139.75, 2, 2, 'F'); //SeriousOther
doc.text('OTHEROTHE', 180.5, 141.25); //SeriousSpec
doc.rect(109.8, 149.5, 2, 2, 'F'); //OutcomeFatal
doc.rect(109.8, 153.35, 2, 2, 'F'); //OutcomeContinuing
doc.rect(133.8, 149.5, 2, 2, 'F'); //OutcomeRecovering
doc.rect(133.8, 153.35, 2, 2, 'F'); //OutcomeRecovered
doc.rect(158.3, 149.5, 2, 2, 'F'); //OutcomeUnknown
doc.rect(158.3, 153.35, 2, 2, 'F'); //OutcomeOther
doc.text('OTHEROTHE', 180.5, 155.25); //OutcomeSpec
doc.addPage('a4', 'p'); //Add second page
doc.addImage(form2, 'JPEG', 0, 0, 210, 297); //Set bg image
doc.text('Dr. Anoop Singh', 110, 225);  //ReturnToName
doc.text('Clinical Pharmacologist', 110, 229);  //ReturnToDesignation
doc.text('VPS Rockland Hospital, New Delhi', 110, 233); //ReturnToAddress
doc.text('anoop.singh@vpsrocklandhospitals.com', 110, 237); //ReturnToEmail
doc.save('temp.pdf');
