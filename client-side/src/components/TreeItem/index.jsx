import { Typography } from "@material-ui/core";
import { TreeItem } from "@material-ui/lab";
import useStyles from "./style";

const ContentTreeItem = (props) => {
  const classes = useStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption">{labelInfo}</Typography>
        </div>
      }
      {...other}
    />
  );
};

export default ContentTreeItem;
