class CreateSurveyEntries < ActiveRecord::Migration
  def change
    create_table :survey_entries do |t|
      t.string :choice

      t.timestamps
    end
  end
end
