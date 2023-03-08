import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.handleClick = this.handleClick.bind(this);
    this.toggleButton.addEventListener("click", this.handleClick);
  }

  async handleClick(event) {
    event.preventDefault();
    this.followState === "followed" ? this.unfollow() : this.follow();
  }

  async follow() {
    // this.followState = "followed";
    this.followState = "followed";
  }

  async unfollow() {
    // this.followState = "unfollowed";
    this.followState = "unfollowed";
  }

  render() {
    switch (this.followState) {
      case "followed": 
        this.toggleButton.innerHTML = "Unfollow!";
        break;
      case "unfollowed":
        this.toggleButton.innerHTML = "Follow!";
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}