import React, { useEffect, useState } from 'react';
import Links from './Links';
import './TeachersBill.css';
import './FormButton.css';

import Dropdown, {
	semesterOptions,
	semesterTitle,
	sessionTitle,
	sessionOptions,
} from '../SampleDropdown/Dropdown';
import '../SampleDropdown/styles.css';
import ThreeFieldsNoAdd from '../../Functions/ThreeFieldsNoAdd';
import ThreeFields from '../../Functions/ThreeFields';
import HandleSem from '../../Functions/HandleSem';

const DirectorsBill = () => {
  const [inputMembers, setMembers] = useState([
    {
      id: "",
      institute: "",
      department: "",
      name: "",
    },
  ]);
  const [inputChair, setInputChair] = useState([
    {
      id: "",
      institute: "",
      department: "",
      name: "",
    },
  ]);
  const [inputInvi, setInputInvi] = useState([
    {
      id: "",
      institute: "",
      department: "",
      name: "",
    },
  ]);

  const localTeacherDB = [
    {
      id: "",
      name: "",
      email: "",
      institute: "",
      department: "",
      designation: "",
      image: "",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [exam, setExam] = useState({
    session: "",
    semester: "",
  });

  // const submit = async () => {
  //   console.log(inputFields);
  //   console.log(inputChair);
  //   console.log(inputInvi);
  //   console.log(exam);
  // };
  // console.log(exam);

	return (
		<>
			<div>
				<Links />
			</div>

			<div className="FullFormPage">
				<form
					className="Form"
					onSubmit={handleSubmit}>
					<div className="DropdownformRow">
						<div className="FormSubRow">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
								handleData={(child) => HandleSem(child, exam, setExam)}
							/>
						</div>

						<div className="FormSubRow">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
								handleData={(child) => HandleSem(child, exam, setExam)}
							/>
						</div>
					</div>
          <div className="formRow">
            <label className="Label">Committee Chairman</label>
            <ThreeFieldsNoAdd
              inputFields={inputChair}
              setInputFields={setInputChair}
              localTeacherDB={localTeacherDB}
            />
          </div>

          <div className="formRow">
            <label className="Label">Chief Invigilator</label>
            <ThreeFieldsNoAdd
              inputFields={inputInvi}
              setInputFields={setInputInvi}
              localTeacherDB={localTeacherDB}
            />
          </div>

          <div className="formRow">
            <label className="Label">Committee Members</label>
            <ThreeFields
              inputFields={inputMembers}
              setInputFields={setMembers}
              localTeacherDB={localTeacherDB}
            />
            <div className="formRow SubmitRow">
              <button type="submit" className="submitButton">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DirectorsBill;
