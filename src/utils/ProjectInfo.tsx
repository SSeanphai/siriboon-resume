interface Info {
  name: string;
  link: string;
  mainImage: string;
  description: string;
  projectImg: string[];
  id: string;
}

const projectInfo: Info[] = [
  {
    name: "พฤกษาภิรมย์",
    link: "/projectPage",
    mainImage: "../public/pruksapilom/main.png",
    description:
      "ในยุคที่การใช้ชีวิตในเมืองกลายเป็นส่วนสำคัญของการดำรงชีวิตประจำวัน การมีพื้นที่สีเขียวภายในบ้านหรือที่ทำงานกลายเป็นสิ่งที่มีค่าไม่แพ้สิ่งอื่นใด ต้นไม้ไม่เพียงแต่ช่วยฟอกอากาศ เพิ่มความสวยงามและความเป็นธรรมชาติให้กับพื้นที่ แต่ยังช่วยลดความเครียดและเพิ่มความรู้สึกผ่อนคลายให้กับผู้ที่ดูแล อย่างไรก็ตาม การดูแลต้นไม้ในสภาพแวดล้อมที่ไม่เหมาะสม หรือขาดความรู้ความเข้าใจที่ถูกต้อง อาจทำให้ต้นไม้เสียหายหรือไม่เจริญเติบโตตามที่ควรจะเป็น  จากปัญหาดังกล่าว แอป พฤกษาภิรมย์ จึงถือกำเนิดขึ้น เพื่อเป็นเพื่อนคู่ใจของคนรักต้นไม้ ไม่ว่าคุณจะเป็นมือใหม่หรือมือเก่า แอปนี้จะช่วยให้การดูแลต้นไม้เป็นเรื่องง่ายและสนุกมากยิ่งขึ้น",
    projectImg: [
      "../public/pruksapilom/img2.png",
      "../public/pruksapilom/img3.png",
      "../public/pruksapilom/img4.png",
      "../public/pruksapilom/img5.png",
    ],
    id: "0",
  },
  {
    name: "พฤกษาภิรมย์",
    link: "/projectPage",
    mainImage: "../src/assets/Uniinfo/main.png",
    description:
      "พฤกษาภิรมย์ ช่วยให้การดูแลต้นไม้ในบ้านและที่ทำงานง่ายขึ้น ไม่ว่าคุณจะเป็นมือใหม่หรือมือเก่า แอปนี้จะให้คำแนะนำและข้อมูลที่จำเป็นเพื่อให้ต้นไม้ของคุณเติบโตอย่างสวยงามและแข็งแรง",
    projectImg: [
      "../src/assets/Uniinfo/img2.png",
      "../src/assets/pruksapilom/img3.png",
      "../src/assets/pruksapilom/img4.png",
    ],
    id: "1",
  },
];

export default projectInfo;
