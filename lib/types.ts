export interface News {
  id: string
  title: string
  excerpt: string | null
  content: string
  image_url: string | null
  author: string | null
  published_date: string
  category: string | null
  created_at: string
  updated_at: string
}

export interface Semillero {
  id: string
  name: string
  description: string
  faculty: string
  area: string
  coordinator: string | null
  email: string | null
  image_url: string | null
  is_funded: boolean
  status?: string
  created_at: string
  updated_at: string
}

export interface Document {
  id: string
  title: string
  description: string | null
  file_url: string
  category: string
  author: string | null
  upload_date: string
  file_type: string | null
  created_at: string
}

export interface Registration {
  id: string
  user_id: string | null
  semillero_id: string | null
  full_name: string
  email: string
  student_id: string
  faculty: string
  program: string
  motivation: string
  status: string
  created_at: string
  updated_at: string
}

export interface SemilleroRegistration {
  id: string
  semillero_name: string
  semillero_description: string
  semillero_faculty: string
  semillero_type: "Investigación" | "Creación" | "Investigación y creación"
  semillero_image_url: string | null
  leader_name: string
  leader_email: string
  leader_role: string
  second_leader_name: string | null
  second_leader_email: string | null
  second_leader_role: string | null
  status: "pending" | "approved" | "rejected"
  created_at: string
  updated_at: string
}
