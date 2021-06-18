import { SvgIcon } from "@material-ui/core";
import { ReactComponent as RawSvg } from 'Images/logo.svg';

const LogoIcon = () => {
  return (
    <SvgIcon component={RawSvg} viewBox="0 0 60 60" />
  );
}

export default LogoIcon;
