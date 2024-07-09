/* 
    group
    name
    nickname
    phone[]
    email
 */
    const contact = [
      
//ชั้น 1 สำนักงานกายภาพบำบัด
{ group: "ชั้น 1 สำนักงานกายภาพบำบัด", name: "สำนักงานกายภาพบำบัด", phone: ["028496600,3178"] }, 

//ชั้น 1 สำนักงานกิจกรรมบำบัด
{ group: "ชั้น 1 สำนักงานกิจกรรมบำบัด", name: "สำนักงานกิจกรรมบำบัด", phone: ["028496600,3177"] }, 

//ชั้น 1 คลินิกกิจกรรมบำบัด
{ group: "ชั้น 1 คลินิกกิจกรรมบำบัด", name: "คลินิกกิจกรรมบำบัด", phone: ["028496600,1043"] }, 

//ชั้น 1 ห้องออกกำลังกาย
{ group: "ชั้น 1 ห้องออกกำลังกาย", name: "ห้องออกกำลังกาย", phone: ["028496600,1046"] }, 

//ชั้น 1 คลินิกธาราบำบัด
{ group: "ชั้น 1 คลินิกธาราบำบัด", name: "คลินิกธาราบำบัด", phone: ["028496600,1025"] }, 

//ชั้น 1 เวชภัณฑ์ปลอดเชื้อ
{ group: "ชั้น 1 เวชภัณฑ์ปลอดเชื้อ", name: "เวชภัณฑ์ปลอดเชื้อ0", phone: ["028496600,1111"] }, 
{ group: "ชั้น 1 เวชภัณฑ์ปลอดเชื้อ", name: "เวชภัณฑ์ปลอดเชื้อ1", phone: ["028496600,1112"] },

//ชั้น 1 สำนักงานเภสัชกรรมคลังยา
{ group: "ชั้น 1 สำนักงานเภสัชกรรมคลังยา", name: "สำนักงานเภสัชกรรมคลังยา", phone: ["028496600,1015"] },
{ group: "ชั้น 1 สำนักงานเภสัชกรรมคลังยา", name: "คลังยา", phone: ["028496600,1071"] },

//ชั้น 1 งานเวชภัณฑ์ทางการแพทย์
{ group: "ชั้น 1 งานเวชภัณฑ์ทางการแพทย์", name: "งานเวชภัณฑ์ทางการแพทย์0", phone: ["028496600,1070"] },
{ group: "ชั้น 1 งานเวชภัณฑ์ทางการแพทย์", name: "งานเวชภัณฑ์ทางการแพทย์1", phone: ["028496600,2237"] }, 

//ชั้น 1 ห้องหัตถการและหน่วยตรวจโรคทั่วไปนอกเวลา
{ group: "ชั้น 1 ห้องหัตถการและหน่วยตรวจโรคทั่วไปนอกเวลา", name: "ห้องหัตถการและหน่วยตรวจโรคทั่วไปนอกเวลา0", phone: ["028496600,1411"] },
{ group: "ชั้น 1 ห้องหัตถการและหน่วยตรวจโรคทั่วไปนอกเวลา", name: "ห้องหัตถการและหน่วยตรวจโรคทั่วไปนอกเวลา1", phone: ["028496600,1412"] },

//ชั้น 1 หน่วยตรวจผู้สูงอายุ
{ group: "ชั้น 1 หน่วยตรวจผู้สูงอายุ", name: "หน่วยตรวจผู้สูงอายุ0", phone: ["028496600,1104"] },

//ชั้น 1 ARI Clinic
{ group: "ชั้น 1 ARI Clinic", name: "ARI Clinic0", phone: ["028496600,2027"] },
{ group: "ชั้น 1 ARI Clinic", name: "ARI Clinic1", phone: ["028496600,2305"] },

//ชั้น 1 ศิริราชมูลนิธิ
{ group: "ชั้น 1 ศิริราชมูลนิธิ", name: "ศิริราชมูลนิธิ0", phone: ["028496600,1016"] },
{ group: "ชั้น 1 ศิริราชมูลนิธิ", name: "ศิริราชมูลนิธิ1", phone: ["028496600,1017"] },

//ชั้น 1 ห้องบริบาลเด็กก่อนวัยเรียน
{ group: "ชั้น 1 ห้องบริบาลเด็กก่อนวัยเรียน", name: "ห้องบริบาลเด็กก่อนวัยเรียน", phone: ["028496600,1066"] },

//ชั้น 1 คลินิกกระตุ้นพัฒนาการเด็ก
{ group: "ชั้น 1 หน่วยฟื้นฟูพัฒนาการเด็ก", name: "หน่วยฟื้นฟูพัฒนาการเด็ก", phone: ["028496600,2251"] },

//ชั้น 1 งานสร้างเสริมสุขภาพ
{ group: "ชั้น 1 งานสร้างเสริมสุขภาพ", name: "คลินิกฟ้าใส", phone: ["028496600,2318"] },
{ group: "ชั้น 1 งานสร้างเสริมสุขภาพ", name: "ศูนย์วัคซีน", phone: ["028496600,2307"] },

//ชั้น 1 คลินิกสอนแสดงอายุรศาสตร์
{ group: "ชั้น 1 คลินิกสอนแสดงอายุรศาสตร์", name: "คลินิกสอนแสดงอายุรศาสตร์0", phone: ["028496600,1114"] },
{ group: "ชั้น 1 คลินิกสอนแสดงอายุรศาสตร์", name: "คลินิกสอนแสดงอายุรศาสตร์1", phone: ["028496600,1115"] },

//ชั้น 1 การเงิน ARI Clinic
{ group: "ชั้น 1 การเงิน ARI Clinic", name: "การเงิน ARI Clinic", phone: ["028496600,1116"] },

//ชั้น 1 เวชระเบียน ARI Clinic
{ group: "ชั้น 1 เวชระเบียน ARI Clinic", name: "เวชระเบียน ARI Clinic", phone: ["028496600,1117"] },

//ชั้น 1 จ่ายยา ARI Clinic
{ group: "ชั้น 1 จ่ายยา ARI Clinic", name: "จ่ายยา ARI Clinic", phone: ["028496600,1118"] },

//ชั้น 1 อาคารหอพักกันภัย
{ group: "ชั้น 1 อาคารหอพักกันภัย", name: "อาคารหอพักกันภัย", phone: ["028496600,5030"] },

//ชั้น 1 Sleep Lab
{ group: "ชั้น 1 Sleep Lab", name: "Sleep Lab", phone: ["028496600,1009"] },

//คลินิกจิตเวช
{ group: "คลินิกจิตเวช", name: "คลินิกจิตเวช", phone: ["028496600,2611"] },

//ชั้น 2 หน่วยตรวจศัลยศาสตร์และออโธ
{ group: "ชั้น 2 หน่วยตรวจศัลยศาสตร์และออโธ", name: "หน่วยตรวจศัลยศาสตร์และออโธ0", phone: ["028496600,2161"] },
{ group: "ชั้น 2 หน่วยตรวจศัลยศาสตร์และออโธ", name: "หน่วยตรวจศัลยศาสตร์และออโธ1", phone: ["028496600,3094"] },

//ชั้น 2 หน่วยตรวจสุขภาพ
{ group: "ชั้น 2 หน่วยตรวจสุขภาพ", name: "หน่วยตรวจสุขภาพ0", phone: ["028496600,3004"] },
{ group: "ชั้น 2 หน่วยตรวจสุขภาพ", name: "หน่วยตรวจสุขภาพ1", phone: ["028496600,3005"] },


//ชั้น 2 หน่วยเคลื่อนย้ายและส่งต่อ
{ group: "ชั้น 2 หน่วยเคลื่อนย้ายและส่งต่อ", name: "หน่วยเคลื่อนย้ายและส่งต่อ0", phone: ["028496600,3122"] },
{ group: "ชั้น 2 หน่วยเคลื่อนย้ายและส่งต่อ", name: "หน่วยเคลื่อนย้ายและส่งต่อ1", phone: ["028496600,3124"] },

//ชั้น 2 แผนกฉุกเฉิน
{ group: "ชั้น 2 ER", name: "ER0", phone: ["028496600,2038"] },
{ group: "ชั้น 2 ER", name: "ER1", phone: ["028496600,2111"] },
{ group: "ชั้น 2 ER", name: "ER0", phone: ["028496600,3117"] },

//ชั้น 2 ศูนย์ Refer
{ group: "ชั้น 2 ศูนย์ Refer", name: "ศูนย์ Refer0", phone: ["028496600,2184"] },
{ group: "ชั้น 2 ศูนย์ Refer", name: "ศูนย์ Refer1", phone: ["028496600,2190"] },

//ชั้น 2 งานเทคนิคการแพทย์
{ group: "ชั้น 2 งานเทคนิคการแพทย์", name: "งานเทคนิคการแพทย์0", phone: ["028496600,2215"] },
{ group: "ชั้น 2 งานเทคนิคการแพทย์", name: "งานเทคนิคการแพทย์1", phone: ["028496600,2216"] },

//ชั้น 2 งานรังสีเทคนิค
{ group: "ชั้น 2 งานรังสีเทคนิค", name: "งานรังสีเทคนิค0", phone: ["028496600,3155"] },
{ group: "ชั้น 2 งานรังสีเทคนิค", name: "งานรังสีเทคนิค1", phone: ["028496600,3156"] },

//ชั้น 2 การเงินผู้ป่วยนอก
{ group: "ชั้น 2 การเงิน", name: "การเงินผู้ป่วยนอก", phone: ["028496600,3059"] },
{ group: "ชั้น 2 การเงิน", name: "การเงินผู้ป่วยนอก1", phone: ["028496600,3146"] },  

//ชั้น 2 ห้องจ่ายยา
{ group: "ชั้น 2 ห้องจ่ายยา", name: "ห้องจ่ายยา0", phone: ["028496600,3105"] },
{ group: "ชั้น 2 ห้องจ่ายยา", name: "ห้องจ่ายยา1", phone: ["028496600,2100"] }, 

//ชั้น 2 แผนกแพทย์แผนจีน แผนไทย
{ group: "ชั้น 2 แผนกแพทย์แผนจีน แผนไทย", name: "แผนกแพทย์แผนจีน แผนไทย", phone: ["028496600,4018"] },

//ชั้น 2 หน่วยรักษาความปลอดภัย
{ group: "ชั้น 2 หน่วยรักษาความปลอดภัย", name: "หน่วยรักษาความปลอดภัย", phone: ["028496600,2188"] },

//ชั้น 2 หน่วยลงทะเบียนผู้ป่วยนอก
{ group: "ชั้น 2 หน่วยลงทะเบียนผู้ป่วยนอก", name: "หน่วยลงทะเบียนผู้ป่วยนอก0", phone: ["028496600,2185"] },
{ group: "ชั้น 2 หน่วยลงทะเบียนผู้ป่วยนอก", name: "หน่วยลงทะเบียนผู้ป่วยนอก1", phone: ["028496600,2186"] },
{ group: "ชั้น 2 หน่วยลงทะเบียนผู้ป่วยนอก", name: "หน่วยลงทะเบียนผู้ป่วยนอก2", phone: ["028496600,2012"] },

//ชั้น 2 Appointment Center นัดหมายในเวลาราชการ 8.00-16.00
{ group: "ชั้น 2 Appointment Center นัดหมายในเวลาราชการ 8.00-16.00", name: " AppointmentCenter0", phone: ["028496600,7051"] },
{ group: "ชั้น 2 Appointment Center นัดหมายในเวลาราชการ 8.00-16.00", name: " AppointmentCenter1", phone: ["028496600,7052"] },

//ชั้น 2 Admission 24 ชั่วโมง
{ group: "ชั้น 2 Admission 24 ชั่วโมง", name: "Admission0", phone: ["028496600,3108"] },
{ group: "ชั้น 2 Admission 24 ชั่วโมง", name: "Admission1", phone: ["028496600,3523"] },
{ group: "ชั้น 2 Admission 24 ชั่วโมง", name: "Admission2", phone: ["028496600,3524"] },

//ชั้น 2 ร้านขายยา ศิริราชบำรุงเวช
{ group: "ชั้น 2 ร้านขายยา ศิริราชบำรุงเวช", name: "ร้านขายยา ศิริราชบำรุงเวช", phone: ["028496600,2103"] },

//ชั้น 2 จุดติดต่อเอกสารการแพทย์ย้อนหลัง
{ group: "ชั้น 2 จุดติดต่อเอกสารการแพทย์ย้อนหลัง", name: "จุดติดต่อเอกสารการแพทย์ย้อนหลัง", phone: ["028496600,2204"] },

//ชั้น 2 คลินิกเวชศาสตร์ครอบครัว
{ group: "ชั้น 2 คลินิกเวชศาสตร์ครอบครัว", name: "คลินิกเวชศาสตร์ครอบครัว0", phone: ["028496600,3119"] },
{ group: "ชั้น 2 คลินิกเวชศาสตร์ครอบครัว", name: "คลินิกเวชศาสตร์ครอบครัว1", phone: ["028496600,4019"] },

//เบอร์โทรฉุกเฉินทางการแพทย์
{ group: "เบอร์โทรฉุกเฉินทางการแพทย์", name: "CPR", phone: ["028496600,555"] },
{ group: "เบอร์โทรฉุกเฉินอัคคีภัย", name: "แจ้งเหตุเพลิงไหม้", phone: ["028496600,1234"] },

//ชั้น 3 แผนกห้องผ่าตัด
{ group: "ชั้น 3 ห้องผ่าตัด", name: "ห้องผ่าตัด counter OR0", phone: ["028496600,3229"] },
{ group: "ชั้น 3 ห้องผ่าตัด", name: "ห้องผ่าตัด counter OR1", phone: ["028496600,3230"] },
{ group: "ชั้น 3 ห้องผ่าตัด", name: "ห้องผ่าตัด counter OR2", phone: ["028496714"] },
{ group: "ชั้น 3 ห้องผ่าตัด", name: "ห้อง recovery room", phone: ["028496600,3577"] },

//ชั้น 3 หน่วยงานเวชสถิติ งานเวชระเบียน
{ group: "ชั้น 3 หน่วยงานเวชสถิติ งานเวชระเบียน", name: "หัวหน้างานเวชสถิติ", phone: ["028496600,7016"] },
{ group: "ชั้น 3 หน่วยงานเวชสถิติ งานเวชระเบียน", name: "Coder OPD", phone: ["028496600,2037"] },
{ group: "ชั้น 3 หน่วยงานเวชสถิติ งานเวชระเบียน", name: "Coder IPD", phone: ["028496600,3076"] },
{ group: "ชั้น 3 หน่วยงานเวชสถิติ งานเวชระเบียน", name: "หน่วยแสกน IPD", phone: ["028496600,3339"] },

//ชั้น 3 ฝ่ายการแพทย์
{ group: "ชั้น 3 ฝ่ายการแพทย์", name: "ฝ่ายการแพทย์0", phone: ["028496600,3114"] },
{ group: "ชั้น 3 ฝ่ายการแพทย์", name: "ฝ่ายการแพทย์1", phone: ["028496600,3116"] },
{ group: "ชั้น 3 ฝ่ายการแพทย์", name: "ฝ่ายการแพทย์2", phone: ["028496600,3349"] },

//ชั้น 3 งานคลินิกพิเศษ
{ group: "ชั้น 3 งานคลินิกพิเศษ", name: "งานคลินิกพิเศษ0", phone: ["028496600,2160"] },
{ group: "ชั้น 3 งานคลินิกพิเศษ", name: "งานคลินิกพิเศษ1", phone: ["028496600,2164"] },
{ group: "ชั้น 3 งานคลินิกพิเศษ", name: "งานคลินิกพิเศษ2", phone: ["028496600,3341"] },

//ชั้น 3 คลินิกกุมารเวชกรรม
{ group: "ชั้น 3 คลินิกกุมารเวชกรรม", name: "คลินิกกุมารเวชกรรม0", phone: ["028496600,1120"] },
{ group: "ชั้น 3 คลินิกกุมารเวชกรรม", name: "คลินิกกุมารเวชกรรม1", phone: ["028496600,1121"] },

//ชั้น 3 แผนกไตเทียม
{ group: "ชั้น 3 แผนกไตเทียม", name: "แผนกไตเทียม0", phone: ["028496600,3034"] },
{ group: "ชั้น 3 แผนกไตเทียม", name: "แผนกไตเทียม1", phone: ["028496600,3035"] },

//ชั้น 3 ICU
{ group: "ชั้น 3 ICU", name: "ICU0", phone: ["028496600,3331"] },
{ group: "ชั้น 3 ICU", name: "ICU1", phone: ["028496600,3332"] },  

//ชั้น 3 CAPD Clinic
{ group: "ชั้น 3 CAPD Clinic", name: "CAPD Clinic0", phone: ["028496600,3321"] },
{ group: "ชั้น 3 CAPD Clinic", name: "CAPD Clinic1", phone: ["028496600,3325"] },  

//ชั้น 3 ศูนย์ฟอกไต ศิริราช-กาญจนา
{ group: "ชั้น 3 ศูนย์ฟอกไต ศิริราช-กาญจนา", name: "ศูนย์ฟอกไต ศิริราช-กาญจนา", phone: ["028496600,3363"] }, 

//ชั้น 3 หน่วยตรวจจักษุ/ตา
{ group: "ชั้น 3 หน่วยตรวจจักษุ/ตา", name: " หน่วยตรวจจักษุ/ตา0", phone: ["028496600,3300"] },
{ group: "ชั้น 3 หน่วยตรวจจักษุ/ตา", name: "หน่วยตรวจจักษุ/ตา1", phone: ["028496600,3301"] },



//ชั้น 4 สำนักงานผู้อำนวยการ
{ group: "ชั้น 4 สำนักงานผู้อำนวยการ", name: "สำนักงานผู้อำนวยการ0", phone: ["028496600,4050"] },
{ group: "ชั้น 4 สำนักงานผู้อำนวยการ", name: "สำนักงานผู้อำนวยการ1", phone: ["028496600,4051"] },

//ชั้น 4 หน่วยสวัสดิการร้านค้า
{ group: "ชั้น 4 หน่วยสวัสดิการร้านค้า", name: "หน่วยสวัสดิการร้านค้า", phone: ["028496600,4014"] },

//ชั้น 4 แผนกห้องสมุด
{ group: "ชั้น 4 แผนกห้องสมุด", name: "แผนกห้องสมุด", phone: ["028496600,3191"] },
      
//ชั้น 4 ฝ่ายการพยาบาล
{ group: "ชั้น 4 ฝ่ายการพยาบาล", name: "ฝ่ายการพยาบาล0", phone: ["028496600,3067"] },
{ group: "ชั้น 4 ฝ่ายการพยาบาล", name: "ฝ่ายการพยาบาล1", phone: ["028496600,3069"] },
{ group: "ชั้น 4 ฝ่ายการพยาบาล", name: "ฝ่ายการพยาบาล2", phone: ["028496600,3157"] },

//ชั้น 4 งานเวชสารสนเทศ
{ group: "ชั้น 4 งานเวชสารสนเทศ", name: "งานเวชสารสนเทศ0", phone: ["028496600,4015"] },
{ group: "ชั้น 4 งานเวชสารสนเทศ", name: "งานเวชสารสนเทศล1", phone: ["028496600,4253"] },

//ชั้น 4 แลปจุลชีววิทยา
{ group: "ชั้น 4 แลปจุลชีววิทยา", name: "แลปจุลชีววิทยา", phone: ["028496600,4306"] },

//ชั้น 4 IBS
{ group: "ชั้น 4 IBS", name: "IBS", phone: ["028496600,4043"] },

//ชั้น 4 หน่วยประกันสัมพันธ์
{ group: "ชั้น 4 หน่วยประกันสัมพันธ์", name: "หน่วยประกันสัมพันธ์0", phone: ["028496600,1036"] },
{ group: "ชั้น 4 หน่วยประกันสัมพันธ์", name: "หน่วยประกันสัมพันธ์1", phone: ["0630211196"] },

//ชั้น D งานโสตทัศนูปกรณ์
{ group: "ชั้น D งานโสตทัศนูปกรณ์", name: "งานโสตทัศนูปกรณ์", phone: ["028496600,4141"] },
{ group: "ชั้น D งานโสตทัศนูปกรณ์", name: "หัวหน้างานโสตทัศนูปกรณ์", phone: ["028496600,5031"] },

//ชั้น D งานวิศวกรรมบริการ
{ group: "ชั้น D งานวิศวกรรมบริการ", name: "งานวิศวกรรมบริการ", phone: ["028496600,5005"] },
{ group: "ชั้น D งานวิศวกรรมบริการ", name: "หน่วยซ่อมบำรุง", phone: ["028496600,5005"] },
{ group: "ชั้น D งานวิศวกรรมบริการ", name: "หน่วยอุปกรณ์ทางการแพทย์", phone: ["028496600,5004"] },

//ชั้น D งานสื่อสารองค์กร
{ group: "ชั้น D งานสื่อสารองค์กร", name: "งานสื่อสารองค์กร", phone: ["028496600,5018"] },
{ group: "ชั้น D งานสื่อสารองค์กร", name: "หัวหน้างานงานสื่อสารองค์กร", phone: ["028496600,7010"] },

//ชั้น D งานเวชระเบียน
{ group: "ชั้น D งานเวชระเบียน", name: "งานเวชระเบียน0", phone: ["028496600,3132"] },
{ group: "ชั้น D งานเวชระเบียน", name: "งานเวชระเบียน1", phone: ["028496600,3133"] },

//อาคารบริการ
{ group: "อาคารบริการ", name: "งานบริการผ้า0", phone: ["028496600,1702"] },
{ group: "อาคารบริการ", name: "งานบริการผ้า1", phone: ["028496600,1703"] },
{ group: "อาคารบริการ", name: "หัวหน้างานบริการผ้า", phone: ["028496600,7015"] },

//ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบประสาท
{ group: "ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบประสาท", name: "คลินิกกายภาพบำบัดระบบประสาท0", phone: ["028496600,1500"] },
{ group: "ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบประสาท", name: "คลินิกกายภาพบำบัดระบบประสาท1", phone: ["028496600,1505"] },

//ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ
{ group: "ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ", name: "คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ0", phone: ["028496600,1516"] },
{ group: "ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ", name: "คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ1", phone: ["028496600,1517"] },
{ group: "ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ", name: "คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ2", phone: ["028496600,1518"] },
{ group: "ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ", name: "คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ3", phone: ["028496600,1519"] },
{ group: "ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ", name: "คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ4", phone: ["028496600,1520"] },
{ group: "ตึกใหม่ ชั้น 1 คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ", name: "คลินิกกายภาพบำบัดระบบกระดูกและกล้ามเนื้อ5", phone: ["028496600,1521"] },


//ตึกใหม่ ชั้น 1 คลินิกเวชศาสตร์ฟื้นฟู เคาน์เตอร์พยาบาล
{ group: "ตึกใหม่ ชั้น 1 คลินิกเวชศาสตร์ฟื้นฟู เคาน์เตอร์พยาบาล", name: "คลินิกเวชศาสตร์ฟื้นฟู0", phone: ["028496600,1538"] },
{ group: "ตึกใหม่ ชั้น 1 คลินิกเวชศาสตร์ฟื้นฟู เคาน์เตอร์พยาบาล", name: "คลินิกเวชศาสตร์ฟื้นฟู1", phone: ["028496600,1539"] },


//ตึกใหม่ ชั้น 1 เคาน์เตอร์นัดหมายกายภาพ และ กิจกรรมบำบัด
{ group: "ตึกใหม่ ชั้น 1 เคาน์เตอร์นัดหมายกายภาพ และ กิจกรรมบำบัด", name: "เคาน์เตอร์นัดหมายกายภาพบำบัด", phone: ["028496600,1541"] },
{ group: "ตึกใหม่ ชั้น 1 เคาน์เตอร์นัดหมายกายภาพ และ กิจกรรมบำบัด", name: "เคาน์เตอร์นัดหมายกิจกรรมบำบัด", phone: ["028496600,1542"] },

//ตึกใหม่ ชั้น 1 การเงินผู้ป่วยนอก
{ group: "ตึกใหม่ ชั้น 1 การเงินผู้ป่วยนอก", name: "การเงินผู้ป่วยนอก", phone: ["028496600,1548"] },

//ตึกใหม่ ชั้น 1 คลินิกสูตินรีเวช
{ group: "ตึกใหม่ ชั้น 1 คลินิกสูตินรีเวช", name: "คลินิกสูตินรีเวช0", phone: ["028496600,1571"] },
{ group: "ตึกใหม่ ชั้น 1 คลินิกสูตินรีเวช", name: "คลินิกสูตินรีเวช1", phone: ["028496600,1572"] },

//ตึกใหม่ ชั้น 1 คลินิกผิวหนังและเลเซอร์
{ group: "ตึกใหม่ ชั้น 1 คลินิกผิวหนังและเลเซอร์", name: "คลินิกผิวหนังและเลเซอร์0", phone: ["028496600,1591"] },
{ group: "ตึกใหม่ ชั้น 1 คลินิกผิวหนังและเลเซอร์", name: "คลินิกผิวหนังและเลเซอร์1", phone: ["028496600,1592"] },

//ตึกใหม่ ชั้น 2 งานเทคนิคการแพทย์
{ group: "ตึกใหม่ ชั้น 2 งานเทคนิคการแพทย์", name: "งานเทคนิคการแพทย์0", phone: ["028496600,2500"] },
{ group: "ตึกใหม่ ชั้น 2 งานเทคนิคการแพทย์", name: "งานเทคนิคการแพทย์1", phone: ["028496600,2501"] },

//ตึกใหม่ ชั้น 2 งานรังสีเทคนิค
{ group: "ตึกใหม่ ชั้น 2 งานรังสีเทคนิค", name: "งานรังสีเทคนิค0", phone: ["028496600,2551"] },
{ group: "ตึกใหม่ ชั้น 2 งานรังสีเทคนิค", name: "งานรังสีเทคนิค1", phone: ["028496600,2552"] },

//ตึกใหม่ ชั้น 2 คลินิก ENT
{ group: "ตึกใหม่ ชั้น 2 คลินิก ENT", name: "คลินิก ENT0", phone: ["028496600,2571"] },
{ group: "ตึกใหม่ ชั้น 2 คลินิก ENT", name: "คลินิก ENT1", phone: ["028496600,2572"] },

//ตึกใหม่ ชั้น 2 คลินิกศัลยกรรม
{ group: "ตึกใหม่ ชั้น 2 คลินิกศัลยกรรม", name: "คลินิกศัลยกรรม0", phone: ["028496600,2591"] },
{ group: "ตึกใหม่ ชั้น 2 คลินิกศัลยกรรม", name: "คลินิกศัลยกรรม1", phone: ["028496600,2592"] },
{ group: "ตึกใหม่ ชั้น 2 คลินิกศัลยกรรม", name: "คลินิกศัลยกรรม2", phone: ["028496600,2593"] }, 

//ตึกใหม่ ชั้น 2 คลินิกอายุรกรรม
{ group: "ตึกใหม่ ชั้น 2 คลินิกอายุรกรรม", name: "คลินิกอายุรกรรม1", phone: ["028496600,2611"] },
{ group: "ตึกใหม่ ชั้น 2 คลินิกอายุรกรรม", name: "คลินิกอายุรกรรม1", phone: ["028496600,2612"] },
{ group: "ตึกใหม่ ชั้น 2 คลินิกอายุรกรรม", name: "คลินิกอายุรกรรม2", phone: ["028496600,2631"] },
{ group: "ตึกใหม่ ชั้น 2 คลินิกอายุรกรรม", name: "คลินิกอายุรกรรม2", phone: ["028496600,2632"] },

//ตึกใหม่ ชั้น 3 ICU
{ group: "ตึกใหม่ ชั้น 3 ICU", name: "ICU2", phone: ["028496600,3501"] },
{ group: "ตึกใหม่ ชั้น 3 ICU", name: "ICU2", phone: ["028496600,3502"] },
{ group: "ตึกใหม่ ชั้น 3 ICU", name: "ICU2", phone: ["028496600,3503"] },

//ตึกใหม่ ชั้น 3 การเงินผู้ป่วยนอก
{ group: "ตึกใหม่ ชั้น 3 การเงินผู้ป่วยนอก", name: "การเงินผู้ป่วยนอก", phone: ["028496600,3531"] },

//ตึกใหม่ ชั้น 3 การเงินผู้ป่วยใน
{ group: "ตึกใหม่ ชั้น 3 การเงินผู้ป่วยใน", name: "การเงินผู้ป่วยใน0", phone: ["028496600,3532"] },
{ group: "ตึกใหม่ ชั้น 3 การเงินผู้ป่วยใน", name: "การเงินผู้ป่วยใน1", phone: ["028496600,3533"] },
{ group: "ตึกใหม่ ชั้น 3 การเงินผู้ป่วยใน", name: "การเงินผู้ป่วยใน2", phone: ["028496600,3534"] },

//ตึกใหม่ ชั้น 3 ห้องจ่ายยา
{ group: "ตึกใหม่ ชั้น 3 ห้องจ่ายยา", name: "ห้องจ่ายยา0", phone: ["028496600,3562"] },
{ group: "ตึกใหม่ ชั้น 3 ห้องจ่ายยา", name: "ห้องจ่ายยา1", phone: ["028496600,3563"] },

//ตึกใหม่ ชั้น 3 ห้องพักผู้ป่วยสามัญ
{ group: "ตึกใหม่ ชั้น 3 ห้องพักผู้ป่วยสามัญ", name: "ห้องพักผู้ป่วยสามัญ0", phone: ["028496600,3591"] },
{ group: "ตึกใหม่ ชั้น 3 ห้องพักผู้ป่วยสามัญ", name: "ห้องพักผู้ป่วยสามัญ1", phone: ["028496600,3594"] },

//ตึกใหม่ ชั้น 4 ห้องพักผู้ป่วยพิเศษ
{ group: "ตึกใหม่ ชั้น 4 ห้องพักผู้ป่วยพิเศษ", name: "ห้องพักผู้ป่วยพิเศษ 4B", phone: ["028496600,4510"] },
{ group: "ตึกใหม่ ชั้น 4 ห้องพักผู้ป่วยพิเศษ", name: "ห้องพักผู้ป่วยพิเศษ 4B", phone: ["028496600,4511"] },
{ group: "ตึกใหม่ ชั้น 4 ห้องพักผู้ป่วยพิเศษ", name: "ห้องพักผู้ป่วยพิเศษ 4A", phone: ["028496600,4531"] },
{ group: "ตึกใหม่ ชั้น 4 ห้องพักผู้ป่วยพิเศษ", name: "ห้องพักผู้ป่วยพิเศษ 4A", phone: ["028496600,4534"] },

//ตึกใหม่ ชั้น 5 ห้องพักผู้ป่วยใน ด้านหน้า
{ group: "ตึกใหม่ ชั้น 5 ห้องพักผู้ป่วยใน ด้านหน้า", name: "ห้องพักผู้ป่วยใน ด้านหน้า0", phone: ["028496600,5501"] },
{ group: "ตึกใหม่ ชั้น 5 ห้องพักผู้ป่วยใน ด้านหน้า", name: "ห้องพักผู้ป่วยใน ด้านหน้า1", phone: ["028496600,5502"] },
{ group: "ตึกใหม่ ชั้น 5 ห้องพักผู้ป่วยใน ด้านหน้า", name: "ห้องพักผู้ป่วยใน ด้านหน้า2", phone: ["028496600,5503"] },

//ตึกใหม่ ชั้น 5 ห้องพักผู้ป่วยใน ด้านหลัง
{ group: "ตึกใหม่ ชั้น 5 ห้องพักผู้ป่วยใน ด้านหลัง", name: "ห้องพักผู้ป่วยใน ด้านหลัง0", phone: ["028496600,5504"] },
{ group: "ตึกใหม่ ชั้น 5 ห้องพักผู้ป่วยใน ด้านหลัง", name: "ห้องพักผู้ป่วยใน ด้านหลัง1", phone: ["028496600,5505"] },

//ตึกงานอาคารสถานที่และยานพาหนะ ชั้น 2 งานอาคารสถานที่และยานพาหนะ
{ group: "ตึกงานอาคารสถานที่และยานพาหนะ ชั้น 2 งานอาคารสถานที่และยานพาหนะ", name: "งานอาคารสถานที่และยานพาหนะ0", phone: ["028496600,5008"] },
{ group: "ตึกงานอาคารสถานที่และยานพาหนะ ชั้น 2 งานอาคารสถานที่และยานพาหนะ", name: "งานอาคารสถานที่และยานพาหนะ1", phone: ["028496600,5009"] },

//ตึกกาญจนาบริพัฒน์ ชั้น 1 คลังพัสดุ
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 1 คลังพัสดุ", name: "คลังพัสดุ", phone: ["028496600,6131"] },

//ตึกกาญจนาบริพัฒน์ ชั้น 2 งานโภชนาการ
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 2 งานโภชนาการ", name: "งานโภชนาการ0", phone: ["028496600,6240"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 2 งานโภชนาการ", name: "งานโภชนาการ1", phone: ["028496600,6245"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 2 งานโภชนาการ", name: "งานโภชนาการ(outsource1)", phone: ["028496600,6247"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 2 งานโภชนาการ", name: "งานโภชนาการ(outsource2)", phone: ["028496600,6248"] },

//ตึกกาญจนาบริพัฒน์ ชั้น 3 งานคลัง
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานคลัง", name: "งานคลัง0", phone: ["028496600,6342"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานคลัง", name: "งานคลัง1", phone: ["028496600,6343"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานคลัง", name: "หัวหน้างานคลัง", phone: ["028496600,6357"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานคลัง", name: "การจัดส่งเอกสาร,การรับบริจาค1", phone: ["028496600,6342"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานคลัง", name: "การจัดส่งเอกสาร,การรับบริจาค2", phone: ["028496600,6343"] },

//ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หัวหน้างาน", phone: ["028496600,7012"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยจัดหาพัสดุ0", phone: ["028496600,6381"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยจัดหาพัสดุ1", phone: ["028496600,6382"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยจัดหาพัสดุ2", phone: ["028496600,6383"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยจัดหาพัสดุ3", phone: ["028496600,6384"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยจัดหาพัสดุ4", phone: ["028496600,6386"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยจัดหาพัสดุ5", phone: ["028496600,6387"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยจัดหาพัสดุ6", phone: ["028496600,6388"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยจัดหาพัสดุ7", phone: ["028496600,6393"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยจัดหาพัสดุ8", phone: ["028496600,6395"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยควบคุมทรัพย์สินและจำหน่ายพัสดุ0", phone: ["028496600,6390"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยควบคุมทรัพย์สินและจำหน่ายพัสดุ1", phone: ["028496600,6391"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยควบคุมทรัพย์สินและจำหน่ายพัสดุ2", phone: ["028496600,6392"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยธุรการ0", phone: ["028496600,6336"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยธุรการ1", phone: ["028496600,6396"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยธุรการ2", phone: ["028496600,6397"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "หน่วยธุรการ3", phone: ["028496600,6398"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 3 งานพัสดุ", name: "สำนักงานคลังพัสดุ", phone: ["028496600,6399"] },

//ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR0", phone: ["028496600,6448"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR1", phone: ["028496600,6450"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR2", phone: ["028496600,6466"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR3", phone: ["028496600,6467"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR4", phone: ["028496600,6468"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR5", phone: ["028496600,6469"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR6", phone: ["028496600,6470"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR7", phone: ["028496600,6471"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR8", phone: ["028496600,6472"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR9", phone: ["028496600,6473"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR10", phone: ["028496600,6474"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR11", phone: ["028496600,6475"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR12", phone: ["028496600,6476"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR13", phone: ["028496600,6477"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR14", phone: ["028496600,6478"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR15", phone: ["028496600,6479"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR16", phone: ["028496600,6480"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR17", phone: ["028496600,6481"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR18", phone: ["028496600,6482"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานบุคคล HR", name: "งานบุคคล HR19", phone: ["028496600,6483"] },

//ตึกกาญจนาบริพัฒน์ ชั้น 4 งานนโยบายและแผน
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานนโยบายและแผน", name: "งานนโยบายและแผน0", phone: ["028496600,6486"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานนโยบายและแผน", name: "งานนโยบายและแผน1", phone: ["028496600,6493"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานนโยบายและแผน", name: "งานนโยบายและแผน2", phone: ["028496600,6494"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานนโยบายและแผน", name: "งานนโยบายและแผน3", phone: ["028496600,6495"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานนโยบายและแผน", name: "งานนโยบายและแผน4", phone: ["028496600,6496"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานนโยบายและแผน", name: "งานนโยบายและแผน5", phone: ["028496600,6497"] },

//ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "หัวหน้างาน (มาศโมฬี จิตวิริยธรรม)", phone: ["028496600,7018"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "ธุรการ เจ้าหน้าที่บริหารงานทั่วไป (ศลิษา ธาระสวัสดิ์)", phone: ["028496600,6435"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "ธุรการ พนักงานธุรการ", phone: ["028496600,6436"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "หน่วยวิจัย นักบริหารงานวิจัย", phone: ["028496600,6439"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "หน่วยวิจัย เจ้าหน้าที่วิจัย (กัญญาภัค เงินอินต๊ะ)", phone: ["028496600,6440"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "เจ้าหน้าที่วิจัย ", phone: ["028496600,6441"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "หน่วยบริการวิชาการ เจ้าหน้าที่บริหารงานทั่วไป (วนิดา ธนากรกุล)", phone: ["028496600,6442"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "หน่วยบริการวิชาการ นักวิชาการสารสนเทศ (ณัฐนิชา จังสมยา)", phone: ["028496600,6443"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "หน่วยหลักสูตรและการศึกษา นักวิชาการศึกษา (พรรณพัชร คงชัย)", phone: ["028496600,6444"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "หน่วยหลักสูตรและการศึกษา นักวิชาการศึกษา (คุณธน ธนกุลภรณ์)", phone: ["028496600,6445"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานการศึกษา วิจัยและบริการวิชาการ", name: "หน่วยหลักสูตรและการศึกษา นักวิชาการศึกษา", phone: ["028496600,6438"] },

//ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ0", phone: ["028496600,6451"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ1", phone: ["028496600,6452"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ2", phone: ["028496600,6453"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ3", phone: ["028496600,6454"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ4", phone: ["028496600,6455"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ5", phone: ["028496600,6456"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ6", phone: ["028496600,6457"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ7", phone: ["028496600,6458"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ8", phone: ["028496600,6459"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ9", phone: ["028496600,6460"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ10", phone: ["028496600,6461"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ11", phone: ["028496600,6462"] },
{ group: "ตึกกาญจนาบริพัฒน์ ชั้น 4 งานพัฒนาคุณภาพ", name: "งานพัฒนาคุณภาพ12", phone: ["028496600,6463"] },

//ตึกกาญจนาปันรักษ์ ชั้น 1 เคมีบำบัดระยะสั้น
{ group: "ตึกกาญจนาปันรักษ์ ชั้น 1 เคมีบำบัดระยะสั้น", name: "หอผู้ป่วยเคมีบำบัด", phone: ["028496600,6101"] },
{ group: "ตึกกาญจนาปันรักษ์ ชั้น 1 เคมีบำบัดระยะสั้น", name: "หน่วยเคมีบำบัดระยะสั้น", phone: ["028496600,6102"] },



];

 

    
