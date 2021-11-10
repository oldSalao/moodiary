import styled from "styled-components";

const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 55%;
`;

const WriteForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
`;

const ImojiBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
`;

const WriteButton = styled.input`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;
`;

const Write = () => {
  return (
    <WriteBox>
      <h2>글작성</h2>
      <WriteForm>
        <textarea rows="10" cols="40" style={{ resize: "none" }} />
        <RadioBox>
          <input type="radio" name="mood" value="angry" />
          <input type="radio" name="mood" value="gloomy" />
          <input type="radio" name="mood" value="sad" />
          <input type="radio" name="mood" value="soso" />
          <input type="radio" name="mood" value="excited" />
          <input type="radio" name="mood" value="delight" />
          <input type="radio" name="mood" value="happy" />
        </RadioBox>
        <ImojiBox>
          <div>👿</div>
          <div>😭</div>
          <div>😥</div>
          <div>🙂</div>
          <div>😃</div>
          <div>😄</div>
          <div>😁</div>
        </ImojiBox>
        <WriteButton type="submit" value="작성완료" />
      </WriteForm>
    </WriteBox>
  );
};

export default Write;
