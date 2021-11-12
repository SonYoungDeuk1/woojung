import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

export default function Email() {
    const [CheckBoxopen, setCheckBoxopen] = useState(true);
    const onToggleCheckBox = () => {
      setCheckBoxopen(!CheckBoxopen);
    };
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xwu0hvn', 'template_t50hfxa', e.target, 'user_x1acVV0eCa9xatGgN9366')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  function Alert(){
        // eslint-disable-next-line no-lone-blocks
        {CheckBoxopen
            ?
            alert('메일이 전송되었습니다')
            :
            alert('약관동의 버튼을 클릭하세요')
        }
    }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <Blockwrapper>
        <InputWrapper>
            <Label>이름</Label>
            <Input type="text" name="company-name" />
        </InputWrapper>
        <InputWrapper>
            <Label>분류</Label>
            <Input type="text" name="user-rank" />
        </InputWrapper>
        <InputWrapper>
            <Label>이메일</Label>
            <Input type="text" name="user-name" />
        </InputWrapper>
        <InputWrapper>
            <Label>연락처</Label>
            <Input type="text" name="contact-number" />
        </InputWrapper>
        <InputWrapper>
            <Label>제목</Label>
            <EmailInput type="text" name="contact-number" />
        </InputWrapper>
        <InputWrapper>
            <Label>내용</Label>
            <Textarea name="message" />
        </InputWrapper>
        <TermsWrapper>
        </TermsWrapper>
        {CheckBoxopen?
                <Button type="submit" value="보내기" open={CheckBoxopen} onClick={Alert}/>
                :
        <div></div>
        }
        </Blockwrapper>
    </form>
  );
}

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    margin: 5vh auto 5vh auto;
    justify-content: space-between;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-between;
  }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1vh 0;

`;

// const EmailWrapper = styled(InputWrapper)`
//     width: 90vw;
//     max-width: 1088px;
// `;

const Label = styled.label`
    padding: 1vh 0;
    font-size: 20px;
    @media screen and (max-width: 780px) {
        font-size: 16px;

  }
`;

const Textarea = styled.textarea`
    width: calc(90vw - 40px);
    max-width: 1048px;
    height: 30vh;
    padding: 0;
    border: 1px solid #C9C9C9;
    border-radius: 3px;
    padding: 20px;
    font-size: 20px;
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: calc(90vw - 20px) ;
    height: 30vh;
    font-size: 16px;
  }
`;

const Input = styled.input`
    max-width: 490px;
    width: calc(44vw - 40px) ;
    padding: 10px 20px;
    border: 1px solid #C9C9C9;
    border-radius: 3px;
    font-size: 20px;
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: calc(45vw - 30px) ;
    height: 20vw;
    max-height: 20px;
    font-size: 16px;
  }
`;

const EmailInput = styled(Input)`
    max-width: 1048px;
        width: calc(90vw - 40px);
    @media screen and (max-width: 780px) {
        padding: 5px 10px;
        width: calc(90vw - 23px);
    max-width: 1088px;
  }
`;

const Button = styled.input`
    -webkit-appearance:none;
    margin: 0 auto;
    width: 90vw;
    height: 60px;
    border: 1px solid #05CFFF;
    background: #05CFFF;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    &:active {
    transform: scale(0.97);
    }
    ${(props) =>
    props.open &&
    css`
      display: flex;
    `}
    @media screen and (max-width: 780px) {
        font-size: 16px;
        margin-top: 5vh;
        height: 30px;
  }
`;

const TermsWrapper = styled.div`
    margin: 5vh 0 10vh 0;
`;
