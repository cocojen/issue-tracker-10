import React from "react";
import { TableItem } from "@style/CustomStyle";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteLabel } from "@modules/label/labelAction";

const DELETE_CONFIRM_MESSAGE = '"Are you sure? Deleting a label will remove it from all issues and pull requests."';

const LabelItem = ({ id, textColor, backgroundColor, description, MutedLink, labelName }) => {
  const dispatch = useDispatch();

  const onClickEdit = () => {};

  const onClickDelete = () => {
    if (window.confirm(DELETE_CONFIRM_MESSAGE)) dispatch(deleteLabel(id));
  };

  return (
    <TableItem>
      <LabelTab>
        <Label textColor={textColor} backgroundColor={backgroundColor}>
          {labelName}
        </Label>
      </LabelTab>
      <DescriptionTab>{description && description}</DescriptionTab>
      <MutedLinkTab>{MutedLink && MutedLink}</MutedLinkTab>
      <ButtonTab>
        <Button>Edit</Button>
        <Button onClick={onClickDelete}>Delete</Button>
      </ButtonTab>
    </TableItem>
  );
};

const LabelTab = styled.div`
  width: 25%;
`;

const Label = styled.div`
  display: inline-block;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 3px;
  color: ${(props) => `${props.textColor}`};
  background-color: ${(props) => `${props.backgroundColor}`};
  line-height: 1.25;
`;

const DescriptionTab = styled.div`
  font-size: 12px;
  color: #586069 !important;
  width: 33.3333%;
`;

const MutedLinkTab = styled.div`
  font-size: 12px;
  color: #586069 !important;
  width: 25%;
`;

const ButtonTab = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: #586069 !important;
  width: 16.66667%;
`;

const Button = styled.button`
  display: inline-block;
  outline: none;
  font-size: 12px;
  margin-left: 16px !important;
  color: #586069;
  cursor: pointer;

  :hover {
    color: #0366d6;
    text-decoration: underline;
  }
`;

export default LabelItem;
