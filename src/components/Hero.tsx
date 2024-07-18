import { Grid, Typography } from "@mui/material";
import "../App.css";

const Hero = () => {
  return (
    <div>
      <Grid container spacing={3} style={{ margin: "1rem" }}>
        <Grid item xs={12} md={6}>
          <Typography color="primary" className="developer-name">
            Ajay Kiran Reddy
          </Typography>

          <Typography className="developer-role">
            Full Stack Developer
          </Typography>

          <Typography color="primary">
            I am a passionate full stack developer with a knack for crafting
            robust and scalable web applications. With 5 years of hands-on
            experience, I have honed my skills in front-end technologies like
            React and Next.js, as well as back-end technologies like Node.js,
            MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise
            to create innovative solutions that drive business growth and
            deliver exceptional user experiences.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://react-portfolio-kevin.vercel.app/assets/kevinRushProfile-C6ZBCIX3.png"
            alt="profile"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
