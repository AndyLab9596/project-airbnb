import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import LanguageIcon from "@material-ui/icons/Language";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="2xl" className={classes.footer}>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Grid container>
          <Grid className={classes.footer__content} item xl={3} md={12}>
            <Typography variant="h7" className={classes.footer__title}>
              GIỚI THIỆU
            </Typography>
            <div>
              <div className={classes.footer__item}>
                <ul>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Phương thức hoạt động của Airbnb
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Trang tin tức
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Airbnb 2021
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Nhà đầu tư
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Airbnb Plus
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Airbnb Luxe
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      HotelTonight
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Airbnb for Work
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Nhờ có Host, mọi điều đều có thể
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Cơ hội nghề nghiệp
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Thư của nhà sáng lập
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid className={classes.footer__content}  item xl={3} md={12}>
            <Typography variant="h7" className={classes.footer__title}>
              CỘNG ĐỒNG
            </Typography>
            <div style={{ display: "flex" }}>
              <div className={classes.footer__item}>
                <ul>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Sự đa dạng và Cảm giác thân thuộc
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Tiện nghi phù hợp với người có nhu cầu đặc biệt
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Đối tác liên kết Airbnb
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Đón tiếp người tị nạn Afghanistan
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Lượt giới thiệu của khách
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Airbnb.org
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid className={classes.footer__content} item xl={3} md={12}>
            <Typography variant="h7" className={classes.footer__title}>
              ĐÓN TIẾP KHÁCH
            </Typography>
            <div style={{ display: "flex" }}>
              <div className={classes.footer__item}>
                <ul>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Cho thuê nhà
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Tổ chức Trải nghiệm trực tuyến
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Tổ chức trải nghiệm
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Đón tiếp khách có trách nhiệm
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Trung tâm tài nguyên
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Trung tâm cộng đồng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid className={classes.footer__content} item xl={3} md={12}>
            <Typography variant="h7" className={classes.footer__title}>
            HỖ TRỢ
            </Typography>
            <div style={{ display: "flex" }}>
              <div className={classes.footer__item}>
                <ul>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Biện pháp ứng phó với đại dịch COVID
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Trung tâm trợ giúp
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Các tùy chọn hủy
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Hỗ trợ khu dân cư
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Trung tâm tài nguyên
                    </a>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.vn/d/howairbnbworks">
                      Tin cậy và an toàn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
         
        </Grid>
      </div>
      <div className={classes.footer__bot}>
        <div className={classes.footer__item__bot}>
          <li>
            <span>© 2021 Airbnb, Inc.</span>
          </li>
          <li>
            <a href="https://www.airbnb.com.vn/help/article/2855/ch%C3%ADnh-s%C3%A1ch-quy%E1%BB%81n-ri%C3%AAng-t%C6%B0">
              Quyền riêng tư
            </a>
          </li>
          <li>
            <a href="https://www.airbnb.com.vn/help/article/2855/ch%C3%ADnh-s%C3%A1ch-quy%E1%BB%81n-ri%C3%AAng-t%C6%B0">
              Điều khoản
            </a>
          </li>
          <li>
            <a href="https://www.airbnb.com.vn/sitemaps/v2">Sơ đồ trang web</a>
          </li>
        </div>
        <div
          className={classes.footer__bot__content}
          style={{ display: "flex" }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginRight: "24px" }}>
              <span>
                <LanguageIcon />
              </span>
              <span>Tiếng Việt (VN)</span>
            </div>
            <div style={{ display: "flex", marginRight: "24px" }}>
              <span>
                <AttachMoneyIcon />
              </span>
              <span>USD</span>
            </div>
          </div>
          <div className={classes.footer__bot__content1}>
            <ul>
              <li>
                <a href="">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
