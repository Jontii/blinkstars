import {
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Menu,
  MenuItem
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PropTypes from 'prop-types';
import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { Theme } from 'src/theme';

interface MultiSelectProps {
  label: string;
  onChange?: (value: string[]) => void;
  options: any[];
  value: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  menuItem: {
    padding: 0
  },
  formControlLabel: {
    padding: theme.spacing(0.5, 2),
    width: '100%',
    margin: 0
  }
}));

const MultiSelect: FC<MultiSelectProps> = ({
  label,
  options,
  value,
  onChange
}) => {
  const classes = useStyles();
  const anchorRef = useRef<any>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenuOpen = (): void => {
    setOpenMenu(true);
  };

  const handleMenuClose = (): void => {
    setOpenMenu(false);
  };

  const handleOptionToggle = (event: ChangeEvent<HTMLInputElement>): void => {
    let newValue = [...value];

    if (event.target.checked) {
      newValue.push(event.target.value);
    } else {
      newValue = newValue.filter(item => item !== event.target.value);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <Button onClick={handleMenuOpen} ref={anchorRef}>
        {label}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorRef.current}
        elevation={1}
        onClose={handleMenuClose}
        open={openMenu}
        PaperProps={{ style: { width: 250 } }}
      >
        {options.map(option => (
          <MenuItem className={classes.menuItem} key={option}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={value.indexOf(option) > -1}
                  onChange={handleOptionToggle}
                  value={option}
                />
              }
              label={option}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

MultiSelect.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired
};

export default MultiSelect;
