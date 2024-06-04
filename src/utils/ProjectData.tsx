interface Project {
  img: string;
  name: string;
  description: string;
  link: string;
  id: string;
}

const projectData: Project[] = [
  {
    img: "../src/assets/pruksapilom/banner.png",
    name: "พฤกษาภิรมย์",
    description:
      "พฤกษาภิรมย์ ช่วยให้การดูแลต้นไม้ในบ้านและที่ทำงานง่ายขึ้น ไม่ว่าคุณจะเป็นมือใหม่หรือมือเก่า แอปนี้จะให้คำแนะนำและข้อมูลที่จำเป็นเพื่อให้ต้นไม้ของคุณเติบโตอย่างสวยงามและแข็งแรง",
    link: "/projectPage/0",
    id: "1",
  },
  {
    img: "../src/assets/Uniinfo/banner.png",
    name: "Uni-info HUB",
    description:
      "โปรเจคในวิชา Human interface design ที่ทำร่วมกับเพื่อนๆ 4 คน ไอเดียคือ application สำหรับนักศึกษาที่ใช้ในการติดตามข้อมูลข่าวสารต่างๆ และ ดูข้อมูลของตนเอง",
    link: "/projectPage/1",
    id: "2",
  },
  {
    img: "https://loremflickr.com/640/480/business",
    name: "Cremin Group",
    description: "The Football Is Good For Training And Recreational Purposes",
    link: "/projectPage/2",
    id: "3",
  },
  {
    img: "https://loremflickr.com/640/480/business",
    name: "Gleichner - Smith",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    link: "/projectPage/3",
    id: "4",
  },
  {
    img: "https://loremflickr.com/640/480/business",
    name: "Streich - Kerluke",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    link: "/projectPage/4",
    id: "5",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4771/4771125.png",
    name: "Kemmer - Roberts",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    link: "/projectPage/5",
    id: "6",
  },
];

export default projectData;
