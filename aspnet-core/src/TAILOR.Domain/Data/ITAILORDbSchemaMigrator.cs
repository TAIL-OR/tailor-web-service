using System.Threading.Tasks;

namespace TAILOR.Data;

public interface ITAILORDbSchemaMigrator
{
    Task MigrateAsync();
}
