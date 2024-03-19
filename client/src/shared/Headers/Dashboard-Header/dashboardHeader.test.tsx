import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

describe("DashboardHeader", () => {
  test("renders navigation links correctly", () => {
    render(
      <Router>
        <DashboardHeader />
      </Router>
    );

    // Check if the navigation links are rendered
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Reviews")).toBeInTheDocument();
    expect(screen.getByText("My Account")).toBeInTheDocument();
  });

  test("links navigate to the correct routes", () => {
    render(
      <Router>
        <DashboardHeader />
      </Router>
    );

    // Check if the navigation links navigate to the correct routes
    expect(screen.getByText("Dashboard").closest("a")).toHaveAttribute(
      "href",
      "/dashboard"
    );
    expect(screen.getByText("Reviews").closest("a")).toHaveAttribute(
      "href",
      "/reviews"
    );
    expect(screen.getByText("My Account").closest("a")).toHaveAttribute(
      "href",
      "/myaccount"
    );
  });

  test("When links are clicked they route to the relevant component", () => {
    render(
      <Router>
        <DashboardHeader />
      </Router>
    );

    // Check if the navigation links navigate to the correct routes
    expect(screen.getByText("Dashboard").closest("a")).toHaveAttribute(
      "href",
      "/dashboard"
    );
    expect(screen.getByText("Reviews").closest("a")).toHaveAttribute(
      "href",
      "/reviews"
    );
    expect(screen.getByText("My Account").closest("a")).toHaveAttribute(
      "href",
      "/myaccount"
    );
  });
});
