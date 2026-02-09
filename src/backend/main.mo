import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  type Announcement = {
    id : Nat;
    title : Text;
    content : Text;
    timestamp : Time.Time;
  };

  module Announcement {
    public func compare(announcement1 : Announcement, announcement2 : Announcement) : Order.Order {
      Int.compare(announcement1.timestamp, announcement2.timestamp);
    };
  };

  type Event = {
    id : Nat;
    title : Text;
    description : Text;
    date : Time.Time;
    location : Text;
  };

  module Event {
    public func compare(event1 : Event, event2 : Event) : Order.Order {
      Int.compare(event1.date, event2.date);
    };
  };

  type Inquiry = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  type ContactForm = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  var nextAnnouncementId = 0;
  var nextEventId = 0;
  var nextInquiryId = 0;

  let announcements = Map.empty<Nat, Announcement>();
  let events = Map.empty<Nat, Event>();
  let inquiries = Map.empty<Nat, Inquiry>();

  public shared ({ caller }) func createAnnouncement(title : Text, content : Text) : async Nat {
    let id = nextAnnouncementId;
    let announcement : Announcement = {
      id;
      title;
      content;
      timestamp = Time.now();
    };
    announcements.add(id, announcement);
    nextAnnouncementId += 1;
    id;
  };

  public shared ({ caller }) func createEvent(title : Text, description : Text, date : Time.Time, location : Text) : async Nat {
    let id = nextEventId;
    let event : Event = {
      id;
      title;
      description;
      date;
      location;
    };
    events.add(id, event);
    nextEventId += 1;
    id;
  };

  public shared ({ caller }) func submitInquiry(form : ContactForm) : async Nat {
    let id = nextInquiryId;
    let inquiry : Inquiry = {
      id;
      name = form.name;
      email = form.email;
      subject = form.subject;
      message = form.message;
      timestamp = Time.now();
    };
    inquiries.add(id, inquiry);
    nextInquiryId += 1;
    id;
  };

  public query ({ caller }) func getAnnouncements() : async [Announcement] {
    announcements.values().toArray().sort();
  };

  public query ({ caller }) func getAnnouncement(id : Nat) : async Announcement {
    switch (announcements.get(id)) {
      case (null) { Runtime.trap("Announcement not found") };
      case (?announcement) { announcement };
    };
  };

  public query ({ caller }) func getEvents() : async [Event] {
    events.values().toArray().sort();
  };

  public query ({ caller }) func getEvent(id : Nat) : async Event {
    switch (events.get(id)) {
      case (null) { Runtime.trap("Event not found") };
      case (?event) { event };
    };
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };
};
