import { Grid, Typography } from "@mui/material";

import "./ProjectPage.css";

export default function MultiActionAreaCard() {
  return (
    <div className="project">
      <Grid container className="aboutMe">
        <Grid item xs={12}>
          <p className="tagHeader">Practice [พฤกษาภิรมย์]</p>
        </Grid>
      </Grid>

      <div className="info">
        <img className="image" src="../src/assets/banner test.png"></img>
        <div className="description">
          <Typography>
            ในยุคที่การใช้ชีวิตในเมืองกลายเป็นส่วนสำคัญของการดำรงชีวิตประจำวัน
            การมีพื้นที่สีเขียวภายในบ้านหรือที่ทำงานกลายเป็นสิ่งที่มีค่าไม่แพ้สิ่งอื่นใด
            ต้นไม้ไม่เพียงแต่ช่วยฟอกอากาศ
            เพิ่มความสวยงามและความเป็นธรรมชาติให้กับพื้นที่
            แต่ยังช่วยลดความเครียดและเพิ่มความรู้สึกผ่อนคลายให้กับผู้ที่ดูแล
            อย่างไรก็ตาม การดูแลต้นไม้ในสภาพแวดล้อมที่ไม่เหมาะสม
            หรือขาดความรู้ความเข้าใจที่ถูกต้อง
            อาจทำให้ต้นไม้เสียหายหรือไม่เจริญเติบโตตามที่ควรจะเป็น <br /> <br />
            จากปัญหาดังกล่าว แอป "พฤกษาภิรมย์" จึงถือกำเนิดขึ้น
            เพื่อเป็นเพื่อนคู่ใจของคนรักต้นไม้ ไม่ว่าคุณจะเป็นมือใหม่หรือมือเก่า
            แอปนี้จะช่วยให้การดูแลต้นไม้เป็นเรื่องง่ายและสนุกมากยิ่งขึ้น
          </Typography>
        </div>
        <img className="image" src="../src/assets/banner test.png"></img>
        <img className="image" src="../src/assets/banner test.png"></img>
        <img className="image" src="../src/assets/banner test.png"></img>
        <img className="image" src="../src/assets/banner test.png"></img>
      </div>
    </div>
  );
}
