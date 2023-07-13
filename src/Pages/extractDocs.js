import React, { useState } from "react";
import { Container, Form, Table, Card, Row, Col } from "react-bootstrap";
import employeeData from "../employeeData";
import "./styles.css";

const ExtractDocs = () => {
  const [selectedOption, setSelectedOption] = useState("employeeId");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const employeeIds = searchTerm.split(",").map((id) => id.trim());
    const documentCategories = searchTerm.split(",").map((category) => category.trim());
    const updatedData = employeeData.filter((employee) => {
      if (selectedOption === "employeeId") {
        return employeeIds.includes(employee.id);
      } else if (selectedOption === "documentCategory") {
        return documentCategories.includes(employee.category);
      }
      return true;
    });

    setFilteredData(updatedData);
  };

  return (
    <>
      <Container className="my-3 py-4">
        <Card className="extract-card">
          <Form onSubmit={handleSearch}>
            <Row>
              <Col lg="6">
                <Form.Check
                  inline
                  type="radio"
                  label="Employee ID"
                  value="employeeId"
                  checked={selectedOption === "employeeId"}
                  onChange={handleOptionChange}
                />
              </Col>
              <Col lg="6">
                <Form.Check
                  inline
                  type="radio"
                  label="Document Category"
                  value="documentCategory"
                  checked={selectedOption === "documentCategory"}
                  onChange={handleOptionChange}
                />
              </Col>
            </Row>

            <div className="search-container">
              {selectedOption === "employeeId" && (
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter employee IDs (separated by commas)"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                  className="my-4 search-form"
                />
              )}

              {selectedOption === "documentCategory" && (
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter document categories (separated by commas)"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                  className="my-4 search-form"
                />
              )}

              <button type="submit" className="search-btn">
                Search
              </button>
            </div>
          </Form>
        </Card>
        {filteredData.length > 0 && (
          <Table striped bordered hover className="my-5">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Document Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.category}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default ExtractDocs;
