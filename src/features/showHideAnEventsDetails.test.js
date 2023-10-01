import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("user hasn’t interacted with the app/ show detail button", () => {});
    let AppComponent;
    when("the user opens the app", () => {
      AppComponent = render(<App />);
    });

    then("the details of the event will be hidden from the user.", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventDOM = AppDOM.querySelector(".details");

      await waitFor(() => {
        expect(EventDOM).not.toBeInTheDocument();
      });
    });
  });
  test("User can expand an event to see details", ({
    given,
    when,
    then,
    and,
  }) => {
    let AppComponent;
    given("the events are loaded on the app", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventDOM).getAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
    when("user clicks the show details button", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventDOM = AppDOM.querySelector("#event-list");
      const EventListItems = within(EventDOM).getAllByRole("listitem");
      const showDetailsButton = within(EventListItems[0]).queryByText(
        "Show Details"
      );

      await userEvent.click(showDetailsButton);
    });

    then("the details of the event will be shown", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventDOM = AppDOM.querySelector(".details");

      await waitFor(() => {
        expect(EventDOM).toBeInTheDocument();
      });
    });

    and("the hide details button appears", async () => {
      const hideDetailsButton = AppComponent.queryAllByText("Hide Details")[0];
      await waitFor(() => {
        expect(hideDetailsButton).toBeInTheDocument();
      });
    });
  });

  test("User can collapse an event to hide details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    given("the events are loaded on the app", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventDOM).getAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    and("user has clicked the show details button", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventDOM = AppDOM.querySelector("#event-list");
      const EventListItems = within(EventDOM).getAllByRole("listitem");
      const showDetailsButton = within(EventListItems[0]).queryByText(
        "Show Details"
      );

      await userEvent.click(showDetailsButton);
    });

    when("user clicks the hide details button", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventDOM = AppDOM.querySelector("#event-list");
      const EventListItems = within(EventDOM).getAllByRole("listitem");
      const hideDetailsButton = within(EventListItems[0]).queryByText(
        "Hide Details"
      );

      await userEvent.click(hideDetailsButton);
    });

    then("the details of the event will collapse", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventDOM = AppDOM.querySelector(".details");

      await waitFor(() => {
        expect(EventDOM).not.toBeInTheDocument();
      });
    });

    and("the hide details button disappears", async () => {
      const hideDetailsButton = AppComponent.queryAllByText("Hide Details")[0];
      await waitFor(() => {
        expect(hideDetailsButton).toBeUndefined();
      });
    });
  });
});
