class Project < ApplicationRecord
  has_many :proposals, dependent: :destroy
  has_many :project_tags
  has_many :tags, through: :project_tags
  has_many_attached :photos

  belongs_to :user
  
  validates :title, presence: true

end
