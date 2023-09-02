import React from "react";
import { useEffect, useState } from "react";
import update from "immutability-helper";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup } from "reactstrap";

/**
 * 다음은 본인 정보를 설정해주는 거를 작업합니다.
 */
const FooterMasterInfo = () => {
  return (
    <div>
      <InputGroup>
        <ButtonDropdown toggle={function noRefCheck() {}}>
          <DropdownToggle caret>Button Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>링크</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <Input />
      </InputGroup>
      <br />
      <InputGroup></InputGroup>
    </div>
  );
};

export default FooterMasterInfo;
