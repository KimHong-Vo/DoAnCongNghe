const handleSubmitBtn = async() => {
  // store the states in the form data
  const createWSData = new FormData();
  createWSData.append("wsName", formValue.wsName);
  createWSData.append("wsType", formValue.wsType);
  createWSData.append("description", formValue.description);
  try {
    // make axios post request
    const response = await axios({
      method: "post",
      url: "/api/createWorkSpace",
      data: createWSData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch(error) {
    console.log(error)
  }
}