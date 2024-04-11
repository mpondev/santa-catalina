import { add } from 'date-fns';

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

// async function getGuestId() {}

export const bookings = [
  // CABIN 001
  {
    created_at: fromToday(-20, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    apartment_id: 1,
    guest_id: 2,
    has_breakfast: true,
    observations:
      'I have a gluten allergy and would like to request a gluten-free breakfast.',
    is_paid: false,
    num_guests: 1,
  },
  {
    created_at: fromToday(-33, true),
    start_date: fromToday(-23),
    end_date: fromToday(-13),
    apartment_id: 1,
    guest_id: 3,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 2,
  },
  {
    created_at: fromToday(-27, true),
    start_date: fromToday(12),
    end_date: fromToday(18),
    apartment_id: 1,
    guest_id: 4,
    has_breakfast: false,
    observations: '',
    is_paid: false,
    num_guests: 2,
  },

  // CABIN 002
  {
    created_at: fromToday(-45, true),
    start_date: fromToday(-45),
    end_date: fromToday(-29),
    apartment_id: 2,
    guest_id: 5,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 2,
  },
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(15),
    end_date: fromToday(18),
    apartment_id: 2,
    guest_id: 6,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 2,
  },
  {
    created_at: fromToday(-5, true),
    start_date: fromToday(33),
    end_date: fromToday(48),
    apartment_id: 2,
    guest_id: 7,
    has_breakfast: true,
    observations: '',
    is_paid: false,
    num_guests: 2,
  },

  // CABIN 003
  {
    created_at: fromToday(-65, true),
    start_date: fromToday(-25),
    end_date: fromToday(-20),
    apartment_id: 3,
    guest_id: 8,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(-2),
    end_date: fromToday(0),
    apartment_id: 3,
    guest_id: 9,
    has_breakfast: false,
    observations: 'We will be bringing our small dog with us',
    is_paid: true,
    num_guests: 3,
  },
  {
    created_at: fromToday(-14, true),
    start_date: fromToday(-14),
    end_date: fromToday(-11),
    apartment_id: 3,
    guest_id: 10,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4,
  },

  // CABIN 004
  {
    created_at: fromToday(-30, true),
    start_date: fromToday(-4),
    end_date: fromToday(8),
    apartment_id: 4,
    guest_id: 11,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-1, true),
    start_date: fromToday(12),
    end_date: fromToday(17),
    apartment_id: 4,
    guest_id: 12,
    has_breakfast: true,
    observations: '',
    is_paid: false,
    num_guests: 4,
  },
  {
    created_at: fromToday(-3, true),
    start_date: fromToday(18),
    end_date: fromToday(19),
    apartment_id: 4,
    guest_id: 13,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 1,
  },

  // CABIN 005
  {
    created_at: fromToday(0, true),
    start_date: fromToday(14),
    end_date: fromToday(21),
    apartment_id: 5,
    guest_id: 14,
    has_breakfast: true,
    observations: '',
    is_paid: false,
    num_guests: 5,
  },
  {
    created_at: fromToday(-6, true),
    start_date: fromToday(-6),
    end_date: fromToday(-4),
    apartment_id: 5,
    guest_id: 15,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-4, true),
    start_date: fromToday(-4),
    end_date: fromToday(-1),
    apartment_id: 5,
    guest_id: 16,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 6,
  },

  // CABIN 006
  {
    created_at: fromToday(-3, true),
    start_date: fromToday(0),
    end_date: fromToday(11),
    apartment_id: 6,
    guest_id: 17,
    has_breakfast: false,
    observations:
      "We will be checking in late, around midnight. Hope that's okay :)",
    is_paid: true,
    num_guests: 6,
  },
  {
    created_at: fromToday(-16, true),
    start_date: fromToday(-16),
    end_date: fromToday(-9),
    apartment_id: 6,
    guest_id: 18,
    has_breakfast: true,
    observations: 'I will need a rollaway bed for one of the guests',
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-18, true),
    start_date: fromToday(-4),
    end_date: fromToday(-1),
    apartment_id: 6,
    guest_id: 19,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 6,
  },

  // CABIN 007
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(17),
    end_date: fromToday(23),
    apartment_id: 7,
    guest_id: 20,
    has_breakfast: false,
    observations: '',
    is_paid: false,
    num_guests: 8,
  },
  {
    created_at: fromToday(-7, true),
    start_date: fromToday(40),
    end_date: fromToday(50),
    apartment_id: 7,
    guest_id: 21,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 7,
  },
  {
    created_at: fromToday(-55, true),
    start_date: fromToday(32),
    end_date: fromToday(37),
    apartment_id: 7,
    guest_id: 22,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 6,
  },

  // CABIN 008
  {
    created_at: fromToday(-8, true),
    start_date: fromToday(-5),
    end_date: fromToday(0),
    apartment_id: 8,
    guest_id: 1,
    has_breakfast: true,
    observations:
      'My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible',
    is_paid: true,
    num_guests: 9,
  },
  {
    created_at: fromToday(0, true),
    start_date: fromToday(0),
    end_date: fromToday(5),
    apartment_id: 8,
    guest_id: 23,
    has_breakfast: true,
    observations:
      'I am celebrating my anniversary, can you arrange for any special amenities or decorations?',
    is_paid: true,
    num_guests: 10,
  },
  {
    created_at: fromToday(-10, true),
    start_date: fromToday(10),
    end_date: fromToday(13),
    apartment_id: 8,
    guest_id: 24,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 7,
  },
];
