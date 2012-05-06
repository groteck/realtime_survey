class SurveyEntry < ActiveRecord::Base
  attr_accessible :choice
  FORM_OPTIONS = ['ruby', 'php', 'python', 'java', 'other']
  def self.get_results
    counts = SurveyEntry.count({ :group => :choice })
    FORM_OPTIONS.map do |o| 
      {
        'title' => o, 
        'votes' => counts[o]||0
      } 
    end
  end 
end
